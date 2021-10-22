(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(7),s=n(2),a=n(3),i=n(5),c=n(4),u=n(1),o=n.n(u),l=n(8),h=n.n(l),d=n(0);function j(e){return Object(d.jsx)("button",{className:"square"+(e.isWinningSquare?" square-winning":""),onClick:e.onClick,children:e.value})}var b=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderSquare",value:function(e){var t=this;return Object(d.jsx)(j,{isWinningSquare:this.props.winningSquares.includes(e),value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}},"square #"+e)}},{key:"renderRow",value:function(e){for(var t=[],n=e;n<e+3;n++)t.push(this.renderSquare(n));return t}},{key:"renderRows",value:function(e){for(var t=[],n=0;n<3*e;n+=3)t.push(Object(d.jsx)("div",{className:"board-row",children:this.renderRow(n)},"row #"+n));return t}},{key:"render",value:function(){return Object(d.jsx)("div",{children:this.renderRows(3)})}}]),n}(o.a.Component),v=b,f=(n(14),function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(a.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();x(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,location:e}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"calculateWinningSquares",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var s=Object(r.a)(t[n],3),a=s[0],i=s[1],c=s[2];if(e[a]&&e[a]===e[i]&&e[a]===e[c])return[a,i,c]}return null}},{key:"render",value:function(){var e,t=this,n=this.state.history,r=n[this.state.stepNumber],s=x(r.squares),a=this.calculateWinningSquares(r.squares),i=n.map((function(e,n){var r=n?"Go to move #".concat(n,"\n                (col: ").concat([0,3,6].includes(e.location)?1:[1,4,7].includes(e.location)?2:[2,5,8].includes(e.location)?3:void 0,", row: ").concat([0,1,2].includes(e.location)?1:[3,4,5].includes(e.location)?2:[6,7,8].includes(e.location)?3:void 0,")"):"Go to game start";return Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return t.jumpTo(n)},children:t.state.stepNumber===n?Object(d.jsx)("strong",{children:r}):r})},n)}));return e=s?"Winner: ".concat(s):"Next player: ".concat(this.state.xIsNext?"X":"O"),Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)("div",{className:"game-board",children:Object(d.jsx)(v,{winningSquares:s?a:[],squares:r.squares,onClick:function(e){return t.handleClick(e)}})}),Object(d.jsxs)("div",{className:"game-info",children:[Object(d.jsx)("h1",{children:"tic-tac-toe"}),Object(d.jsx)("div",{className:s&&"winner",children:e}),Object(d.jsx)("ul",{children:i})]})]})}}]),n}(o.a.Component));function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var s=Object(r.a)(t[n],3),a=s[0],i=s[1],c=s[2];if(e[a]&&e[a]===e[i]&&e[a]===e[c])return e[a]}return null}h.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.048fad5e.chunk.js.map