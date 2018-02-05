(function() {
    printListFromTailToHead(head);
})();

//构建ListNode类
function ListNode(x) {
    this.val = x;
    this.next = null;
}

//构建LinkList类
//定义head属性，是头结点的引用，利用原型模式，为所有实例定义insert等方法
function LinkList() {
	this.head = new ListNode('head');
	this.FindNode = FindNode;
}

//创建链表
function insert() {

}

//查找链表LinkList实例中包含内容val的节点，接受的参数为val
function FindNode(value){
	var curNode = this.head;
	while(curNode){
		if (curNode.val === value) {
			return curNode;
			break;
		} else{
			curNode = curNode.next;
		}
	}
}

//删除

//显示
function printListFromTailToHead(head) {
    // write code here
}