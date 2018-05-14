var app6 = new Vue({
	el: '#subreddit-list',
	data: {
		subredditList: [
			'nothing'
		],
		inputVal: ''
	},	
	methods: {
		add: function() {
			this.subredditList.push(this.inputVal)
			this.inputVal = ''
		}
	}
})