import { MongoClient } from 'mongodb';

// ourdomain.com/api/new-meetup

async function handler(req, res) {
    if(req.method === 'POST'){
        const data = req.body;
        //const { title, image, address, description } = data;
        const client = await MongoClient.connect('mongodb+srv://new-user_31:J11ECzvVYNeN2v9H@cluster0.c0zyk.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        
        meetupsCollection.insertOne(data); //To insert one new document ino this collection

        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({ message: 'Meetup inserted!!' });
    }
}

export default handler; 