(function() {
    'use strict';
    
    //nodeObject.normalize()  无参数 无返回值 合并相邻的Text节点并删除空的Text节点
    //这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。
    //该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。


    //nodeObject.ownerDocument  ownerDocument 属性以 Document 对象的形式返回节点的 owner document  DOM2



    /* Range 三种方法创建 new Range()    document.createRange    window.getSelection().getRanageAt() 
        
    collapsed :起始位置和终止位置是否相同
    commonAncestorContainer: 返回包含 startContainer 和 endContainer 的最深的节点。
    endContainer： 返回包含 Range 终点的节点。
    endOffset ：返回 endContainer 中表示Range终点位置的数字。
    startContainer ：返回包含 Range 开始的节点。
    startOffset ：返回 startContainer 中表示 Range 起始位置的数字




    setStart(startNode, startOffset)：设置 Range 的起点。

    如果起始节点类型是 Text， Comment, or CDATASection之一, 
    那么 startOffset指的是从起始节点算起字符的偏移量。 
    对于其他 Node 类型节点， startOffset 是指从起始结点开始算起子节点的偏移量。

    如果设置的起始位点在结束点之下（在文档中的位置），将会导致选区折叠，起始点和结束点都会被设置为指定的起始位置。

    startNode
        startNode 用于设定 Range的起始位置。
    startOffset 
        必须为不小于0的整数。表示从startNode的开始位置算起的偏移量。




    setEnd()：设置 Range 的终点。
    setStartBefore()：以其它节点 （ Node）为基准，设置 Range 的起点。
    setStartAfter()：以其它节点为基准，设置 Range 的始点。

    Range.setEndBefore()
        以其它节点为基准，设置 Range 的终点。
    Range.setEndAfter()
        以其它节点为基准，设置 Range 的终点。
    Range.selectNode()
        设定一个包含节点和节点内容的 Range 。
    Range.selectNodeContents()
        设定一个包含某个节点内容的 Range 。
    Range.collapse()
        向指定端点折叠该 Range 。


    Range.cloneContents()
        返回 Range 当中节点的文档片段（DocumentFragment）。
    Range.deleteContents()
        从文档（Document）中移除 Range 中的内容。
    Range.extractContents()
        把 Range 的内容从文档树移动到文档片段中。
    Range.insertNode()
        在 Range 的起点处插入节点。
    Range.surroundContents()
        将 Range 的内容移动到一个新的节点中。


    Range.compareBoundaryPoints()
        比较两个 Range 的端点。
    Range.cloneRange()
        返回拥有和原 Range 相同端点的克隆 Range 对象。
    Range.detach()
        从使用状态释放 Range，此方法用于改善性能。
    Range.toString()
        把Range内容作为字符串返回。





    bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)

    当一个HTML文档切换到设计模式(designMode)时，文档对象暴露 execCommand方法，
    该方法允许运行命令来操纵可编辑区域的内容。大多数命令影响文档的选择（粗体，斜体等），
    而其他命令插入新元素（添加链接）或影响整行（缩进）。
    当使用 contentEditable时，调用 execCommand() 将影响当前活动的可编辑元素。



    execCommand  //所有命令是面向焦点元素  及selection的选取
    
    input setSelectionRange() //设置选取范围


    document.activeElement  //当前获取焦点的元素

    */




    function focusNode(parent,child,offset){
    
        parent.focus();

        var sel = window.getSelection(),
            range = document.createRange();
        
        range.collapse(true);
        range.setStart(child,offset);
        range.setEnd(child,offset);
        sel.removeAllRanges();
        sel.addRange(range);

    }




    angular
        .module('ipaiban')
        .directive('uEditor',[function(){

        	return     {
        		strict:'E',
        		templateUrl:'app/components/u-editor/u-editor.html',
        		link:function(scope, elem){
                   var  editor = elem.find('.am-editor-content')[0],
                        ownDoc = editor.ownerDocument,
                        $editor = $(editor),
                        sel = ownDoc.getSelection();

                    var range = ownDoc.createRange();

                    scope.selectAll = function(){
                        // focusNode(editor,editor.childNodes[0],0);
                        // var range = document.createRange(); 
                        // range.selectNodeContents(editor);
                        // sel.addRange(range);

                        // elem.find('.input-elem').focus();
                        $editor.focus();

                        document.execCommand('selectAll');

                        document.execCommand('bold');
                        document.execCommand('foreColor','red');

                        console.log(document.activeElement);

                        // console.log(sel);
                        // console.log($editor.html());
                    }

                    scope.undo = function(){
                        document.execCommand('undo');
                    }

                    scope.redo = function(){
                        document.execCommand('redo');
                    }

                    scope.addBold = function(){
                        document.execCommand('bold');
                    }

                    scope.unSelectAll = function(){
                        sel.removeAllRanges();
                    }

                    scope.insetHtml = function(){
                        document.execCommand('removeFormat');
                    }


                    focusNode(editor,editor.childNodes[0].childNodes[0],2);

                    // $editor.html('\u00a0');
                    // range.selectNodeContents(editor.childNodes[1]);

                    // $(editor).on('mouseup',function(){
                    //     var sel = ownDoc.getSelection();
                    //     var range = sel.getRangeAt(0);
                    //     console.log(sel);
                    //     console.log(range);
                    //     // if (!sel.isCollapsed) {
                    //     //     sel.collapse(sel.focusNode,1);
                    //     // }
                    //     // window.alert(ownDoc.getSelection());
                    // });


                    // ownDoc.execCommand('bold');

                   // console.log(editor.ownerDocument);

                   // var range = document.createRange();
                   // console.log(range);

                   // editor.normalize();

                 
        		}
        	}

        }]);

})();
