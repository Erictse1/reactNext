import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

function def(props) {
	return (
		<MeetupDetail
			img={props.Name2.image}
			title={props.Name2.title}
			address={props.Name2.address}
			description={props.Name2.description}
		/>
	);
}

export default def;

// for dynamic route[abc]
export async function getStaticPaths() {
	const getDatabase = await MongoClient.connect(
		'mongodb+srv://Eric:123@cluster0.m95pz.mongodb.net/changehere?retryWrites=true&w=majority'
	); //return a promise

	const db = getDatabase.db();

	const databasename = db.collection('changehere');
	const documentsofArray = await databasename.find({}, { _id: 1 }).toArray();
	// const meetups = await meetupsCollection.find({}, {}).toArray(); //find --> get all docs, find({},{}),first {} for filter, second, for {}item
	//1 include only 1//toArray convert object to array

	return {
		fallback: 'blocking',
		paths: documentsofArray.map((a) => ({ params: { abc: a._id.toString() } }))

		// paths: [{ params: { abc: 'm1' } }, { params: { abc: 'm2' } }]
	};
}
export async function getStaticProps(context) {
	const getDatabase = await MongoClient.connect(
		'mongodb+srv://Eric:123@cluster0.m95pz.mongodb.net/changehere?retryWrites=true&w=majority'
	); //return a promise

	const db = getDatabase.db();

	const databasename = db.collection('changehere');

	const theParams = context.params.abc;

	const theData = await databasename.findOne({
		_id: ObjectId(theParams) //theParams aldy string from link
	});

	getDatabase.close();

	return {
		props: {
			Name2: {
				id: theData.toString(),
				title: theData.title,
				address: theData.address,
				image: theData.image,
				description: theData.description
			}
		},
		revalidate: 1
	};
}
