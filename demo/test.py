from piston.handler import BaseHandler, AnonymousBaseHandler
from piston.utils import rc, require_mime, require_extended
from django.db.models import Count, Sum, Q
from django.core.files.base import ContentFile
from django.http import HttpResponse

from django.utils.translation import ugettext as _
from wiyun.challenge.models import *

from mongoengine.queryset import DoesNotExist, MultipleObjectsReturned
from wiyun.api.utils import *
from wiyun.cloud.utils import *
from wiyun.cloud.docs import User

import datetime, time

class ChallengeHandler(BaseHandler):
	allowed_methods = ('GET', 'POST')
	anonymous = False
	
	@app_required
	def read(self, request):
		if not request.GET.has_key('challenge_id'):
			return rc.BAD_REQUEST
		try:
			challenge = Challenge.objects.get(id=request.GET['challenge_id'])
		except DoesNotExist:
			resp = rc.BAD_REQUEST
			resp.content = _(u'Challenge Not Found.')
			return resp
			
		def convert_touser(touser):
			item = get_user(touser.to_user)
			item.update({'id': touser.id, 'result': touser.result, 'completed': touser.completed, 'bid_point': touser.bid_point, 'score': touser.score and touser.score or 0})
			return item
			
		result = {'items': [convert_touser(i) for i in ChallengeToUser.objects.filter(challenge=challenge)]}
		if len(result['items']) > 0:
			result['bid_point'] = result['items'][0]['bid_point']
		result.update(get_user(challenge.user))
		result.update({'id': challenge.id, 'create_time': challenge.create_time, 'message': challenge.message, 'score': challenge.score, 'has_blob': challenge.has_blob, 'blob': challenge.has_blob and get_blob_url(challenge) or ''})
		
		challenge_define = challenge.challenge_define
		result.update({'definition_id':challenge_define.id, 'definition_name': challenge_define.name, 'app_id': str(challenge_define.app.pk), \
					'definition_icon': get_full_file_url(challenge_define.icon), 'type': challenge_define.challenge_type})
		return result
		
	@app_required
	def create(self, request):
		if not request.POST.has_key('challenge_definition_id') or not request.POST.has_key('score') \
			or not request.POST.has_key('to_user_ids') or not request.POST.has_key('message'):
			return rc.BAD_REQUEST
		try:
			cd = ChallengeDefine.objects.get(pk=request.POST['challenge_definition_id'], active=True, app=request.app)
			#vaild bid point in the challenge define range
			bid_point = int(request.POST.get('bid_point', 0))
			if (cd.min_point > bid_point) or (cd.max_point != 0 and cd.max_point < bid_point):
				resp = rc.BAD_REQUEST
				resp.content = _(u'Bid point Not in the range.')
				return resp
			
			to_user_ids = request.POST['to_user_ids'].split(',')
			totle_point = bid_point * len(to_user_ids)
			
			if totle_point > 0 and request.user.point < totle_point:
				resp = rc.BAD_REQUEST
				resp.content = _(u'Challeng bid point too much than you current point.')
				return resp
			
			challenge = Challenge(challenge_define_id=cd.pk, user=request.user, message=request.POST['message'], score=request.POST['score'])
			if request.FILES.has_key('blob'):
				challenge.has_blob = True
				challenge.blob = request.FILES['blob'].read()
			challenge.save()
			
			to_users = []
			for to_user_id in to_user_ids:
				try:
					to_users.append(User.objects.get(id=to_user_id))
				except DoesNotExist:
					continue
				except ValueError, e:
					continue
			challenge.to_users(to_users, bid_point)
					
			return rc.ALL_OK
		except ChallengeDefine.DoesNotExist:
			resp = rc.BAD_REQUEST
			resp.content = _(u'Challenge Type Not Found.')
			return resp
			
class ChallengeDefineHandler(BaseHandler):
	allowed_methods = ('GET', )
	anonymous = False
	
	@app_required
	def read(self, request):
		def convert_cd(cd):
			return {'id': cd.id, 'name': cd.name, 'icon': get_full_file_url(cd.icon), 'description': cd.description, \
				'min_point':cd.min_point, 'max_point': cd.max_point, 'challenge_type': cd.challenge_type, 'app_id': str(cd.app.pk)}
				
		if request.GET.has_key('challenge_definition_id'):
			try:
				return convert_cd(ChallengeDefine.objects.get(pk=request.GET['challenge_definition_id']))
			except ChallengeDefine.DoesNotExist:
				resp = rc.BAD_REQUEST
				resp.content = _(u'Challenge Type Not Found.')
				return resp
			
		challenge_defines = ChallengeDefine.objects.filter(app=request.app, active=True)
		return auto_queryset(challenge_defines, request, convert_cd)
		
class PendingHandler(BaseHandler):
	allowed_methods = ('GET', 'POST')
	anonymous = False
	
	@app_required
	def read(self, request):
		if not request.GET.has_key('me'):
			pending_challenges = ChallengeToUser.objects.filter(to_user=request.user, completed=False, accept_time__exists=False)
			def convert_pending(p):
				ds = get_user(p.challenge.user)
				ds.update({'challenge_id':p.challenge.id, 'definition_id':p.challenge.challenge_define.id, 'bid_point':p.bid_point,\
						'definition_name': p.challenge.challenge_define.name, 'definition_icon': get_full_file_url(p.challenge.challenge_define.icon), \
						'id':p.id, 'message': p.challenge.message, 'score': p.challenge.score, \
						'has_blob': p.challenge.has_blob, 'app_id': str(p.challenge.challenge_define.app.pk)})
				return ds
			return auto_queryset(pending_challenges, request, convert_pending)
		else:
			my_challenges = Challenge.objects.filter(user=request.user, completed=False).order_by('-create_time')
			def convert_my_challenge(challenge):
				challenge_define = challenge.challenge_define
				result = {'id': challenge.id, 'name': challenge_define.name, 'icon': get_full_file_url(challenge_define.icon),\
					'message': challenge.message, 'app_id': str(challenge_define.app.pk)}
				to_users = ChallengeToUser.objects.filter(challenge=challenge, completed=False)
				user_count = len(to_users)
				if user_count > 0:
					result['avatar'] = get_user(to_users[0].to_user).get('avatar', '')
					result['username'] = ','.join([cu.to_user.username for cu in to_users])
					result['user_count'] = user_count
					result['bid_point'] = to_users[0].bid_point
					if user_count == 1:
						result['result'] = to_users[0].result
						
				return result
			return auto_queryset(my_challenges, request, convert_my_challenge)
			
	@app_required
	def create(self, request):
		if not request.POST.has_key('challenge_to_user_id'):
			return rc.BAD_REQUEST
		try:
			ctu = ChallengeToUser.objects.get(id=request.POST['challenge_to_user_id'])
			ctu.accept()
		except DoesNotExist:
			resp = rc.BAD_REQUEST
			resp.content = _(u'Challenge Not Found.')
			return resp
		
class ResultHandler(BaseHandler):
	allowed_methods = ('GET', 'POST')
	anonymous = False
	
	@app_required
	def read(self, request):
		if not request.GET.has_key('challenge_definition_id'):
			challenge_definds = ChallengeDefine.objects.filter(app=request.app, visible=True).select_related('app__pk')
			
			def convert_challenge_result(cd):
				item = {'id': cd.id, 'name': cd.name, 'icon': get_full_file_url(cd.icon), 'app_id': str(cd.app.pk)}
								
				def dict_result(cus):
					crs = {}
					for cu in cus:
						cr = crs.get(str(cu.result), [0,0])
						cr[0] = cr[0] + 1
						cr[1] = cr[1] + cu.bid_point
						crs[str(cu.result)] = cr
					return crs
					
				da = [0,0]
				my_crs = dict_result(ChallengeToUser.objects.filter(completed=True, challenge_define_id=str(cd.id), from_user=request.user))
				o_crs = dict_result(ChallengeToUser.objects.filter(completed=True, challenge_define_id=str(cd.id), to_user=request.user))
				
				my_result ={'win_count':my_crs.get('-1', da)[0], 'loss_count':my_crs.get('1', da)[0],\
							'win_point':my_crs.get('-1', da)[1], 'loss_point':-my_crs.get('1', da)[1], \
							'tie_count':my_crs.get('0', da)[0], 'reject_count':my_crs.get('2', da)[0]}
				
				o_result = {'win_count':o_crs.get('1', da)[0], 'loss_count':o_crs.get('-1', da)[0], \
							'win_point':o_crs.get('1', da)[1], 'loss_point':-o_crs.get('-1', da)[1], \
							'tie_count':o_crs.get('0', da)[0], 'reject_count':o_crs.get('2', da)[0]}
				
				item.update({'win_count':my_result['win_count'] + o_result['win_count'], 'loss_count':my_result['loss_count'] + o_result['loss_count'], \
						'tie_count':my_result['tie_count'] + o_result['tie_count'], 'reject_count':my_result['reject_count'] + o_result['reject_count'], \
						'win_point':my_result['win_point'] + o_result['win_point'], 'loss_point':my_result['loss_point'] + o_result['loss_point']})
				return item
				
			return auto_queryset(challenge_definds, request, convert_challenge_result)
		else:
			try:
				cd = ChallengeDefine.objects.get(pk=request.GET['challenge_definition_id'], visible=True, app=request.app)
			except ChallengeDefine.DoesNotExist:
				resp = rc.BAD_REQUEST
				resp.content = _(u'Challenge Type Not Found.')
				return resp
				
			if request.GET.has_key('me'):
				challenges = Challenge.objects.filter(challenge_define_id=cd.pk, user=request.user).order_by('-create_time')
			else:
				challenges = Challenge.objects.filter(challenge_define_id=cd.pk, id__in=[d.challenge.id for d in ChallengeToUser.objects.filter(to_user=request.user, completed=True)]).order_by('-create_time')
			
			def convert_challenge(challenge):
				challenge_define = challenge.challenge_define
				result = {'id': challenge.id, 'name': challenge_define.name, 'icon': get_full_file_url(challenge_define.icon),\
					'message': challenge.message, 'app_id': str(challenge_define.app.pk)}
				to_users_qs = ChallengeToUser.objects.filter(challenge=challenge)
				
				try:
					if request.GET.has_key('me'):
						to_users = to_users_qs
						user_count = len(to_users)
						if user_count > 0:
							result['avatar'] = get_user(to_users[0].to_user).get('avatar', '')
							result['username'] = ','.join([cu.to_user.username for cu in to_users])
							result['user_count'] = user_count
							result['bid_point'] = to_users[0].bid_point
							if user_count == 1:
								result['result'] = to_users[0].result
					else:
						result.update(get_user(challenge.user))
						try:
							to_user = to_users_qs.get(to_user=request.user)
							result['bid_point'] = to_user.bid_point
							result['result'] = to_user.result
						except DoesNotExist:
							pass
					return result
				except DoesNotExist:
					pass
			
			return auto_queryset(challenges, request, convert_challenge)
		
	@app_required
	def create(self, request):
		if not request.POST.has_key('challenge_to_user_id')	or not request.POST.has_key('result'):
			return rc.BAD_REQUEST
		elif str(request.POST['result']) != '2' and not request.POST.has_key('score'):
			return rc.BAD_REQUEST
			
		try:
			cu = ChallengeToUser.objects.get(id=request.POST['challenge_to_user_id'], to_user=request.user, completed=False)
			cu.complete(int(request.POST['result']), request.POST.get('score', None), request.FILES.get('blob', None))
			return rc.ALL_OK
		except DoesNotExist:
			resp = rc.BAD_REQUEST
			resp.content = _(u'Challenge Not Found.')
			return resp

class CancelHandler(BaseHandler):
	allowed_methods = ('POST',)
	anonymous = False
	
	@app_required
	def create(self, request):
		if request.POST.has_key('challenge_id'):
			try:
				challenge = Challenge.objects.get(id=request.POST['challenge_id'], user=request.user)
				cus = ChallengeToUser.objects.filter(challenge=challenge, result=-2)
			except DoesNotExist:
				resp = rc.BAD_REQUEST
				resp.content = _(u'Challenge Not Found.')
				return resp
		elif request.POST.has_key('challenge_to_user_id'):
			ids = request.POST['challenge_to_user_id'].split(',')
			cus = ChallengeToUser.objects.filter(challenge__user=request.user, result=-2)
			if len(ids) == 1:
				cus = cus.filter(id=ids[0])
			else:
				cus = cus.filter(id__in=ids)
		else:
			return rc.BAD_REQUEST
			
		for cu in cus:
			cu.cancel()
		#delete empty challenge
		new_cus = ChallengeToUser.objects.filter(challenge=challenge)
		if len(new_cus) == 0:
			challenge.delete()
			
		return rc.ALL_OK
	
class BlobHandler(BaseHandler):
	allowed_methods = ('GET',)
	anonymous = False
	
	@app_required
	def read(self, request):
		if request.GET.has_key('challenge_id'):
			try:
				challenge = Challenge.objects.get(id=request.GET['challenge_id'])
				return challenge.blob
			except DoesNotExist:
				resp = rc.BAD_REQUEST
				resp.content = _(u'Challenge Not Found.')
				return resp
		elif request.GET.has_key('challenge_to_user_id'):
			try:
				challenge = ChallengeToUser.objects.get(id=request.GET['challenge_to_user_id'])
				return HttpResponse(challenge.blob)
			except DoesNotExist:
				resp = rc.BAD_REQUEST
				resp.content = _(u'Challenge Not Found.')
				return resp
		else:
			return rc.BAD_REQUEST
