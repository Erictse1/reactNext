import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

function abc() {
	const router = useRouter();
	async function passFromIt(e) {
		const get = await fetch('/api/apirouter', {
			method: 'POST',
			body: JSON.stringify(e),
			headers: { 'Content-Type': 'application/json' }
		});

		const getJson = await get.text();
		console.log(getJson);

		router.push('/');
	}
	return <NewMeetupForm onAddMeetup={passFromIt}></NewMeetupForm>;
}
export default abc;
