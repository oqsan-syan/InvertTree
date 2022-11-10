const item = {
    left: {
        value: 2,
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    },

    right: {
        value: 3,
        left: {
            value: 6
        },
        right: {
            value: 7
        }
    }
}

function invertTree(node) {
    const tempLeft = JSON.parse(JSON.stringify(node.left));
    const tempRight = JSON.parse(JSON.stringify(node.right));

    node.right = tempLeft;
    node.left = tempRight;

    if(node.left.hasOwnProperty('left')) {
        invertTree(node.left)
    } else if(node.right.hasOwnProperty('right')) {
        invertTree(node.right)
    }

    return node
}

invertTree(item)