var redis = require("redis");

(async () => {
    const client = redis.createClient();

    client.on('error', (err)=> console.log('Redis Client Error', err));

    await client.connect();

    await client.set("my_key", "Hello World!");
    const reply = await client.get("my_key");
    console.log(reply);

    await client.set("my_key_2", "Hello World");
    const reply2 = await client.get("my_key_2");
    console.log(reply2);

    await client.MSET(['header',3,'left',9,'article',5,'right',0,'footer',0]);
    const value = await client.MGET(['header','left','article','right','footer']);
    console.log(value);

    client.quit();

})();