module.exports = {
	type: 'react-component',
	npm: {
		esModules: true,
		umd: {
			global: 'ReactMCSkinViewer',
			externals: {
				react: 'React'
			}
		}
	},
	devServer: {
		disableHostCheck: true
	}
}
