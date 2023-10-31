let visualElement = document.querySelector(".mydata");

function delFn() {
    visualElement.innerHTML = ""

}

console.log('npm');
const axios = require('axios');
console.log(' lib here',axios);


async function fetchRandomWebsite() {
  try {
    const randomUrl = 'www.booking.com/hotel/bg/sweet-home-burgas.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaBeIAQGYAQm4ARjIAQzYAQHoAQH4AQOIAgGoAgS4AoGwgKoGwAIB0gIkZDc2YmEwM2YtZTI5Ni00MjZhLWI5OWYtMjgxZmY0MWQxMjZh2AIF4AIB&sid=f99f82e5bbee21adcf00e0510663be9a&all_sr_blocks=364127801_147181022_1_0_0&checkin=2024-08-28&checkout=2024-08-30&dest_id=-832673&dest_type=city&dist=0&group_adults=1&group_children=0&hapos=1&highlighted_blocks=364127801_147181022_1_0_0&hpos=1&matching_block_id=364127801_147181022_1_0_0&no_rooms=1&req_adults=1&req_children=0&room1=A&sb_price_type=total&sr_order=popularity&sr_pri_blocks=364127801_147181022_1_0_0__24462&srepoch=1698699313&srpvid=14f89316a080031c&type=total&ucfs=1&fbclid=IwAR2oWyk5sl5mQnja6Nj385JIIIuAzU-bpqO54QzKR0PoYA5XnJM-aFdGIG0&activeTab=photosGallery'; // Replace with the URL of the website you want to fetch.
    // const randomUrl = 'dir.bg'; // Replace with the URL of the website you want to fetch.

    const response = await axios.get(randomUrl);
   console.log(response.data);
    
    if (response.status === 200) {
      const html = response.data;
      console.log(html); // You can do whatever you want with the HTML content here.
    } else {
      console.log('Failed to fetch website. Status code: ' + response.status);
    }
  } catch (error) {
    console.error('An error occurred while fetching the website:', error);
  }
}

fetchRandomWebsite();

