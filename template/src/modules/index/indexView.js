
import IndexPage from '../../components/pages/index/indexPage.vue';
import AppService from '../../services/app.service';
import TestService from '../../services/test.service';

new Vue({
    el: '#index-page',
    render: h => h(IndexPage),
    created(){

        let testService = new TestService();
        testService.getTestData().then(data => console.log(data));

        AppService.test({ name: 'gupack' }, { method: 'POST' })
        .then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });

        AppService.test.get().then(res => {
            console.log(res.data)
        });

        AppService.test.post().then(res => {
            console.log(res.data)
        });

    }
});