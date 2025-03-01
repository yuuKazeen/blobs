// script.js
const images = [
    "1.jpg",
    "1727479530985HT@3YC6P7OZH$WY4GK39~6A.jpg",
    "202409280614524.jpg",
    "202409280646409.jpg",
    "202409280713707.jpg",
    "202409280719431.jpg",
    "202409280722744.png",
    "202409280723817.jpg",
    "202409280731912.jpg",
    "202409280801157.jpg",
    "202409280836779.gif",
    "202409280852194.png",
    "202409280854303.png",
    "202409282249569.jpg",
    "202409300217496.jpg",
    "202409300219262.gif",
    "202409300222950.jpg",
    "202409300223191.jpg",
    "202409300224646.jpg",
    "202409301432022.jpg",
    "202409301432135.jpg",
    "202409301432430.jpg",
    "202409301458309.gif",
    "202410010407658.png",
    "202410010408388.gif",
    "202410010427751.png",
    "202410020056028.gif",
    "202410020110280.jpg",
    "202410022206108.gif",
    "202410022206315.null",
    "202410022221589.png",
    "202410040622007.jpg",
    "202410050018301.jpeg",
    "202410071422933.jpg",
    "202410080223755.jpg",
    "202410090129292.jpg",
    "202410090130591.jpeg",
    "202410090133387.jpg",
    "202410092222995.gif",
    "202410092223581.gif",
    "202410102357518.jpeg",
    "202410102358912.jpeg",
    "202410102359425.jpeg",
    "202410110000857.jpeg",
    "202410110005836.jpeg",
    "202410120218467.png",
    "202410120221723.png",
    "202410130127391.jpg",
    "202410140213241.jpeg",
    "202410140213424.jpeg",
    "202410151707057.jpg",
    "202410151707489.jpg",
    "202410190139379.jpg",
    "202410200217298.png",
    "202410200220425.png",
    "202410221813412.gif",
    "202410261446255.png",
    "202410261529014.png",
    "202410261529015.png",
    "202410261831988.png",
    "36e1022420ee78ab0bf1daf2e374d315-f7c5c.png",
    "37b813efae5d27d34e9eac421698d7b1-ab786.jpeg",
    "37b813efae5d27d34e9eac421698d7b1-f9e3c.jpeg",
    "5db5076b004722f7d47c767ab7fa97ea-6aaac.jpg",
    "5db5076b004722f7d47c767ab7fa97ea.jpg"
];

const masonryContainer = document.querySelector('.masonry');

images.forEach(imageName => {
    const imgElement = document.createElement('img');
    imgElement.src = "image/" + imageName;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'masonry-item';
    itemDiv.appendChild(imgElement);
    masonryContainer.appendChild(itemDiv);
});
