import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const dummy = [
	{
		id: 'm1',
		title: 'good place',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'No.141-143 kau pui lung',
		description: 'first to meet'
	},

	{
		id: 'm2',
		title: 'bad place',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Hong Kong',
		description: 'first to meet'
	}
];

function HomePage(props) {
	return <MeetupList meetups={props.Name} />;
}

export default HomePage;

// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from an API

// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		}
// 	};
// }

// export async function getStaticProps() {
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		},
// 		revalidate: 1
// 	};
// }

export async function getStaticProps() {
	const getDatabase = await MongoClient.connect(
		'mongodb+srv://Eric:123@cluster0.m95pz.mongodb.net/changehere?retryWrites=true&w=majority'
	); //return a promise

	const db = getDatabase.db();

	const databasename = db.collection('changehere');

	const documentsofArray = await databasename.find().toArray();

	getDatabase.close();

	return {
		props: {
			Name: documentsofArray.map((a) => ({
				id: a._id.toString(),
				title: a.title,
				address: a.address,
				image: a.image
			}))
		},
		revalidate: 1
	};
}
