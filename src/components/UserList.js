import React, {Component} from 'react';
import 'isomorphic-fetch';//fetch需要用node安装，没有的可以去下载一下
import {Button} from 'react-bootstrap';//同上

export default class userList extends Component {
    constructor() {
        super();
        this.state = {}
    }
    async componentDidMount() {
        // json解析错误原因 https://segmentfault.com/a/1190000017545154
        // 需要设置前后端交互代理 https://blog.csdn.net/oXinYangonly/article/details/83545230
        let users = await (await fetch('/api/users')).json();//主要是从后台拿json数据
        this.setState({users});
    }
    render() {
        let {users = []} = this.state;

        return (
            <div>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>电话</th>
                        <th>邮箱</th>
                        <th>职位</th>
                        <th>编辑</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({uid, name, age, telephone, job, email}) =>
                        <tr key={uid}>
                            <td>{uid}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{telephone}</td>
                            <td>{email}</td>
                            <td>{job}</td>
                            <td><Button onClick = {() => {
                                this.setState({users});
                            }}>配置</Button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}