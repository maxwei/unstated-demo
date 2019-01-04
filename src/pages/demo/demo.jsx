//react
import React from 'react';
//unstated状态管理
import { Provider, Subscribe, Container } from 'unstated';
//containers
import Counter from '../../containers/counter';
import PaginationContainer from '../../containers/pagination';
//组件
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        //初始化state
        this.state = {
        };

    }

    render() {
        return (
            <Subscribe to={[Counter, PaginationContainer]}>
                {(counter, paginationContainer) => (
                    <div>
                        <section  style={{ 'width': '100%', 'height': '200px', 'border': '1px solid red','padding':'10px'}}>
                            <h2>unstated demo</h2>
                            <button onClick={counter.add}>增加</button>
                            <button onClick={counter.minus}>减少</button>
                            <button onClick={counter.reset}>重置</button>
                            <button onClick={counter.getMockInfo}>异步发送</button>
                            <br />
                            <p>
                                {counter.state.count}
                            </p>
                        </section>
                        <hr />
                        <section style={{ 'width': '100%', 'height': '200px', 'border': '1px solid red','padding':'10px'}}>                           
                            <h2>分页组件 demo</h2>
                                <Pagination 
                                onChange={paginationContainer.onChange} 
                                current={paginationContainer.state.current} 
                                total={100} 
                                pageSize={5}
                                showTotal={total => `共 ${total} 条`}
                            />
                        </section>
                    </div>
                )}
            </Subscribe>
        )
    }
}

//导出组件
export default Demo;