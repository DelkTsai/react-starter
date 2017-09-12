import React, {Component} from 'react'; // 引入了React和PropTypes
import {Row, Col} from 'antd';
import url from '../../../config/ip/image';
import xhr from '../../../services/xhr/index';
import './index.less';
/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        xhr.get(url.imgDetail, {studyId: '5'}, (data) => {
            console.log(data)
            // this.setState({
            //     details: data,
            // });
        })
        xhr.get(url.imgList, {studyIds: '5', platformId: 'archive_test'}, () => {
            // console.log(data)
        })
    }

    render() {
        return (
            <div className="mg-top20">
                <Row>
                    <Col span={5} className="img-detail">
                        <div className="part">
                            <i className="iconfont icon-HEAD"></i>
                            <p>{}</p>
                        </div>
                    </Col>
                    <Col span={19}>
                        <div style={{border: '1px solid yellow'}}>
                            <span >我的影像</span><span>我的影像2</span>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Main;