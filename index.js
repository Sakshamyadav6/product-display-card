const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");

    const { products } = await response.json();

    console.log(products);

    return products;
  } catch (error) {
    console.log(error);
    return error;
  }
};
getProducts()
  .then((prods) => {
    prods.map((prod) => {
      //create mainDiv
      const mainDiv = document.createElement("div");
      mainDiv.className = "card";
      mainDiv.style.width = "19rem";
      mainDiv.style.marginTop = "20px";
      mainDiv.style.marginBottom = "20px";

      //create image
      const image = document.createElement("img");
      image.className = "card-img-top";
      image.src = prod.thumbnail;
      image.style.height = "50vh";

      //create second div
      const secondDiv = document.createElement("div");
      secondDiv.className = "class-body";

      //create title of card
      const title = document.createElement("h5");
      title.className = "card-title";
      title.innerHTML = prod.title;

      //create price
      const price = document.createElement("p");
      price.className = "card-price";
      price.innerHTML = `$ ${prod.price}`;
      price.style.float = "right";
      price.style.fontSize = "22px";
      price.style.fontWeight = "bold";
      price.style.marginRight = "9px";

      //create product desc

      const desc = document.createElement("p");
      desc.className = "card-text";
      desc.innerHTML =
        prod.description.length > 40
          ? prod.description.slice(0, 40) + ["..."]
          : prod.description;

      //create button
      const button = document.createElement("button");
      button.className = "btn btn-warning";
      button.innerHTML = "More Details";
      button.style.margin = "5px";
      button.setAttribute("data-bs-toggle", "modal");
      const modalId = `modal${prod.id}`;
      button.setAttribute("data-bs-target", `#${modalId}`);
      //append mainDiv
      document.getElementById("container").appendChild(mainDiv);

      //append image and secondDiv to mainDiv
      mainDiv.appendChild(image);
      mainDiv.appendChild(secondDiv);

      //append title and price to secondDiv
      secondDiv.appendChild(title);
      secondDiv.appendChild(desc);
      secondDiv.appendChild(price);
      secondDiv.appendChild(button);

      // Create Modal
      const modalDiv = document.createElement("div");
      modalDiv.className = "modal fade ";
      modalDiv.id = modalId;
      modalDiv.tabIndex = -1;
      modalDiv.setAttribute("aria-labelledby", `${modalId}Label`);
      modalDiv.setAttribute("aria-hidden", "true");

      const modalDialog = document.createElement("div");
      modalDialog.className = "modal-dialog";

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";

      const modalHeader = document.createElement("div");
      modalHeader.className = "modal-header";

      const modalTitle = document.createElement("h1");
      modalTitle.className = "modal-title fs-5";
      modalTitle.id = `${modalId}Label`;
      modalTitle.innerHTML = prod.title;

      const modalCloseButton = document.createElement("button");
      modalCloseButton.type = "button";
      modalCloseButton.className = "btn-close";
      modalCloseButton.setAttribute("data-bs-dismiss", "modal");
      modalCloseButton.setAttribute("aria-label", "Close");

      const modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      modalBody.innerHTML = `
      <div class="row">
      <div class="col-md-6">
         <img src="${prod.thumbnail}" class="img-fluid" style="height: 40vh;">
        </div>
         <div class="col-md-6">
         <p>${prod.description}</p>
          <ul>
        <li><Strong>Brand: </Strong>${prod.brand}</li>
        <li><Strong>Category: </Strong>${prod.category}</li>
        <li><Strong>Rating: </Strong>${prod.rating}</li>
        <li><Strong>Status: </Strong>${prod.availabilityStatus}</li>
        <li><Strong>Return Policy: </Strong>${prod.returnPolicy}</li>
        <li><Strong>Warrenty: </Strong>${prod.warrantyInformation}</li>
        </ul>
         <Strong style="font-size:25px;"><Strong>$ </Strong>${prod.price}</Strong>
         </div>
        </div>
        <div>
       
        </div>
        <h4 class="text-center">Actions</h4>
       <div class=" d-flex justify-content-center">
        <button class="btn btn-success me-3" id="edit">Edit</button>
        <button class= "btn btn-outline-danger" id="delete">Delete</button>
        </div>

       `;

      const modalFooter = document.createElement("div");
      modalFooter.className = "modal-footer";

      const modalCloseButtonFooter = document.createElement("button");
      modalCloseButtonFooter.type = "button";
      modalCloseButtonFooter.className = "btn btn-secondary";
      modalCloseButtonFooter.setAttribute("data-bs-dismiss", "modal");
      modalCloseButtonFooter.innerHTML = "Close";

      //   const modalSaveButton = document.createElement("button");
      //   modalSaveButton.type = "button";
      //   modalSaveButton.className = "btn btn-primary";
      //   modalSaveButton.innerHTML = "Save changes";

      // Append Modal Elements
      modalHeader.appendChild(modalTitle);
      modalHeader.appendChild(modalCloseButton);

      modalFooter.appendChild(modalCloseButtonFooter);
      //   modalFooter.appendChild(modalSaveButton);

      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      modalContent.appendChild(modalFooter);

      modalDialog.appendChild(modalContent);
      modalDiv.appendChild(modalDialog);

      // Append Modal to Body
      document.body.appendChild(modalDiv);
    });
  })
  .catch((error) => {
    console.log(error);
  });