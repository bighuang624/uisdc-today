var uisdc_table = new Vue({
  el: '#uisdc_table',
  data: {
    items: []
  },
  mounted: function () {
    var vm = this;
    $.ajax('http://127.0.0.1:3036/uisdc', {
      method: 'GET'
    }).done(function (data) {
      vm.items = data;
      console.log("get data");
    }).fail(function (reason) {
      console.log("fail to get data");
      console.log(reason);
    });

  },
  methods: {}
});