const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootlny2s/",
            name: "springbootlny2s",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootlny2s/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "招聘信息管理系统"
        } 
    }
}
export default base
