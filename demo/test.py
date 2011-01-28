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

