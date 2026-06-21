const queue = [];

export const addPlayer = (player)=>{
    queue.push(player);
}

export const removePlayer = (userId)=>{
    const index = queue.findIndex(
        p => p.userId === userId
    );

    if (index !== -1) {
        queue.splice(index, 1);
    }
}

export const removePlayerBySocketId = (socketId) => {
    const index = queue.findIndex(
        p => p.socketId === socketId
    );

    if (index !== -1) {
        queue.splice(index, 1);
    }
};

export const getPlayers = ()=>{
    return queue;
}