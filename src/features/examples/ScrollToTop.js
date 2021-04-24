
import React,{Component } from 'react'
 
class ScrollToTop extends Component{
  scrollToBottom() {
    if (this.messagesEnd) {
        const scrollHeight = this.messagesEnd.scrollHeight;//里面div的实际高度  2000px
        const height = this.messagesEnd.clientHeight;  //网页可见高度  200px
        const maxScrollTop = scrollHeight - height;
        this.messagesEnd.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
      //如果实际高度大于可见高度，说明是有滚动条的，则直接把网页被卷去的高度设置为两个div的高度差，实际效果就是滚动到底部了。
    }
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.scrollToBottom.bind(this)}>点击这里跳转到底部</button>
        <div className='content' ref={(el) => { this.messagesEnd = el; }}>
          <div className='content-message'></div>
        </div>
      </div>
    );
  }
}
 
export default ScrollToTop;