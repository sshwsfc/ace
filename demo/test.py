import random
import datetime, time

class AppHandler(BaseHandler):
	allowed_methods = ('GET',)
	anonymous = False

	@app_required
	def read(self, request):
		if request.GET.has_key('app_id'):
			return self.get_app_info(request, request.GET['app_id'])
		elif request.GET.has_key('catalog'):
			return self.get_apps_by_type(request, request.GET['catalog'])
		else:
			return self.get_apps_summary(request)