let _ = require('lodash');

function genMoves(length) {
    // 原始轨迹，可设置多个轨迹来随机。 可以用python重构,
    let x = [[-41,-23,0],[0,0,0],[2,-2,204],[4,-2,212],[7,-2,220],[11,-2,227],[12,-2,236],[15,-2,244],[19,-3,252],[23,-4,260],[30,-4,268],[37,-4,276],[46,-6,283],[53,-6,292],[58,-6,300],[66,-6,307],[71,-6,316],[77,-6,323],[82,-6,332],[86,-6,340],[90,-6,348],[95,-6,356],[98,-6,363],[103,-6,372],[106,-6,379],[108,-6,388],[111,-6,396],[112,-7,404],[114,-7,411],[115,-7,420],[119,-8,428],[120,-8,444],[122,-8,452],[124,-11,468],[126,-11,476],[127,-11,483],[128,-11,492],[130,-12,500],[131,-12,525],[132,-12,532],[133,-12,572],[134,-14,580],[136,-14,604],[137,-14,636],[138,-14,660],[139,-14,668],[140,-15,676],[141,-16,683],[142,-16,700],[143,-16,724],[144,-17,764],[145,-17,820],[147,-18,844],[148,-18,1020],[148,-19,1028],[150,-19,1300],[151,-21,1316],[152,-21,1332],[152,-21,2140]];
    let moves = [];
    let x_total_time = _.last(x)[2];  // 获取最大时间
    let x_total_length = _.last(x)[0]; // 获取最大距离
    let time = _.random(1000, 2000);

    moves.push([x[0][0], x[0][1], x[0][2]]); // user 点击点坐标

    for (let i = 1; i < x.length; i++) {
        moves.push([
            Math.round(x[i][0] / x_total_length * length), // 实际上就是缩放
            x[i][1],
            Math.round(x[i][2] / x_total_time * time), // 实际上就是缩放
        ]);
    }

    return moves;
}

module.exports = {
    genMoves: genMoves
};