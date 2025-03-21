document.addEventListener("DOMContentLoaded", async () => {
    let selectedMen = document.getElementById("selectedMen");
    let selectedWomen = document.getElementById("selectedWomen");
    let selectedKids = document.getElementById("selectedKids");
    let men = document.getElementById("men");
    let womens = document.getElementById("women");
    let kids = document.getElementById("kids");



    let modal = document.getElementById("productModal");
    let overlay = document.getElementById("overlayPop");
    let closeModal = document.getElementById("closeModal");


    let modalImage = document.getElementById("modalImage");
    let modalTitle = document.getElementById("modalTitle");
    let modalPrice = document.getElementById("modalPrice");
    let modalOffer = document.getElementById("modalOffer");
    let modalSpecial = document.getElementById("modalSpecial");

    let data = [];



    // Function to fetch data

    const fetchData = async () => {
        try {
            let res = await fetch("myapi.json");
            data = await res.json();

            if (Array.isArray(data) && data.length > 0) {
            } else {
                console.log("No data found or incorrect format");
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    // Fetch data before setting up event listeners
    await fetchData();

    // Function to display Men Section

    const showMenSection = () => {
        selectedMen.style.backgroundColor = "red";
        selectedKids.style.backgroundColor = "#CCCCCC";
        selectedWomen.style.backgroundColor = "#CCCCCC";

        if (!data?.length || !data[0]?.men) {
            console.error("Data is not loaded or in incorrect format.");
            return;
        }

        // Hide other sections
        womens.style.display = "none";
        kids.style.display = "none";
        men.style.display = "flex";

        // Clear and populate men's section

        men.innerHTML = "";
        data[0].men.forEach((element, index) => {

            let card = document.createElement("div");
            card.innerHTML += `
                <div class="card">
                <div class="overlay"></div>
                    <img src="${element.image}" alt="${element.cloth}" />
                   <p class="tag">${element.special}</p>

                    <h3>${element.cloth}</h3>

                    <div class="price-box">
                        <P>${element.price}</P>
                        <P class="ori-price">${element.originalPrice}</P>
                        <P class="offer">${element.offer}</P>

                    </div>
               </div>
            `;

            card.addEventListener("click", () => {

                console.log("card called");

                modalImage.src = element.image;
                modalTitle.innerText = element.cloth;
                modalPrice.innerText = `Price: ${element.price}`;
                modalOffer.innerText = `Offer: ${element.offer}`;
                modalSpecial.innerText = `Special: ${element.special}`;

                modal.style.display = "block";
                overlay.style.display = "block";
            });

            men.appendChild(card);
        });
    };


    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });




    if (selectedMen) {

        selectedMen.addEventListener("click", showMenSection);
    }


    if (selectedWomen) {

        selectedWomen.addEventListener("click", () => {
            selectedMen.style.backgroundColor = "#CCCCCC";
            selectedKids.style.backgroundColor = "#CCCCCC";
            selectedWomen.style.backgroundColor = "red";
            if (!data?.length || !data[0]?.women) {
                console.error("Data is not loaded or in incorrect format.");
                return;
            }

            // Hide other sections
            womens.style.display = "flex";
            kids.style.display = "none";
            men.style.display = "none";

            // Clear and populate women's section
            womens.innerHTML = "";

            data[0].women.forEach(element => {
                let card = document.createElement("div");
                card.innerHTML += `
                   <div class="card">
                <div class="overlay"></div>
                    <img src="${element.image}" alt="${element.cloth}" />
                    <p class="tag">${element.special}</p>

                    <h3>${element.cloth}</h3>

                    <div class="price-box">
                        <P>${element.price}</P>
                        <P class="ori-price">${element.originalPrice}</P>
                        <P class="offer">${element.offer}</P>

                    </div>
                </div>
                `;

                card.addEventListener("click", () => {

                    console.log("card called");

                    modalImage.src = element.image;
                    modalTitle.innerText = element.cloth;
                    modalPrice.innerText = `Price: ${element.price}`;
                    modalOffer.innerText = `Offer: ${element.offer}`;
                    modalSpecial.innerText = `Special: ${element.special}`;

                    modal.style.display = "block";
                    overlay.style.display = "block";
                });

                womens.appendChild(card);
            });

        });

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
            overlay.style.display = "none";
        });

        overlay.addEventListener("click", () => {
            modal.style.display = "none";
            overlay.style.display = "none";
        });
    }



    if (selectedKids) {

        selectedKids.addEventListener("click", () => {
            selectedMen.style.backgroundColor = "#CCCCCC";
            selectedKids.style.backgroundColor = "red";
            selectedWomen.style.backgroundColor = "#CCCCCC";
            if (!data?.length || !data[0]?.kids) {
                console.error("Data is not loaded or in incorrect format.");
                return;
            }

            // Hide other sections
            womens.style.display = "none";
            kids.style.display = "flex";
            men.style.display = "none";

            // Clear and populate kids' section
            kids.innerHTML=""

            data[0].kids.forEach(element => {

                let card = document.createElement("div");
                card.innerHTML += `
                <div div class="card" >
                <div class="overlay"></div>
                    <img src="${element.image}" alt="${element.cloth}" />
                    <p class="tag">${element.special}</p>

                    <h3>${element.cloth}</h3>

                    <div class="price-box">
                        <P>${element.price}</P>
                        <P class="ori-price">${element.originalPrice}</P>
                        <P class="offer">${element.offer}</P>

                    </div>
                </div > `;

                card.addEventListener("click", () => {

                    console.log("card called");

                    modalImage.src = element.image;
                    modalTitle.innerText = element.cloth;
                    modalPrice.innerText = `Price: ${element.price}`;
                    modalOffer.innerText = `Offer: ${element.offer}`;
                    modalSpecial.innerText = `Special: ${element.special}`;

                    modal.style.display = "block";
                    overlay.style.display = "block";
                });

                kids.appendChild(card);

            });
        });

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
            overlay.style.display = "none";
        });

        overlay.addEventListener("click", () => {
            modal.style.display = "none";
            overlay.style.display = "none";
        });

    }

    // **Automatically select "Men" on first load**
    showMenSection();
});
