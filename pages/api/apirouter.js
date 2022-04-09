import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;
		console.log(data);

		// const { id, title, address, description } = data;

		const getClient = await MongoClient.connect(
			'mongodb+srv://Eric:123@cluster0.m95pz.mongodb.net/changehere?retryWrites=true&w=majority'
		); //return a promise

		const db = getClient.db();

		const thedatabase = db.collection('changehere');

		const result = await thedatabase.insertOne(data);
		console.log(result);
		client.close();
		//return promise

		// const selectedMeetup = await meetupsCollection.findOne({
		// 	_id: ObjectId(databasename)
		// });

		// client.close();
		//upperpart for connect database
		res.status(201).json({ message: 'message' });
	}

	// return {
	// 	props: {}
	// };
}

export default handler;
