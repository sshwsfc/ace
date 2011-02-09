import os

for root, dirs, files in os.walk(os.path.join(os.path.realpath(os.path.dirname(__file__)), 'bundles'), True):
	if root[root.rfind('/')+1:] in ('Preferences', 'Snippets', 'Syntaxes'):
		for name in files:
			if name[-6:] != '.plist': continue
			filename = os.path.realpath(os.path.join(root, name))
			filename = filename.replace(' ', '\ ').replace('\'', '\\\'').replace('(', '\(').replace(')', '\)').replace('&', '\&')
			cmd = 'plutil -convert xml1 %s -o %s' % (filename, filename)
			#print cmd
			os.system(cmd)