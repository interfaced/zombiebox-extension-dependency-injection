module.exports = {
	zbConfig: {
		project: {
			name: 'sandbox',
			entry: alias.path('@sandbox-modules/app/index.js'),
			src: alias.path('@sandbox-modules/app')
		},
		extensions: {
			di: {
				servicesAutodetect: [
					{
						group: 'scenes',
						directory: alias.path('@sandbox-modules/app/sandbox/scenes')
					},
					{
						group: 'service',
						directory: alias.path('@sandbox-modules/app/sandbox/service')
					},
					{
						group: 'controller',
						directory: alias.path('@sandbox-modules/app/sandbox/controller')
					},
					{
						group: 'repository',
						directory: alias.path('@sandbox-modules/app/sandbox/model/repository')
					}
				]
			}
		}
	}
};
