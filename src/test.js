const asyncReturn = async () => {
    return Promise.resolve('async return')
}

asyncReturn().then(console.log)