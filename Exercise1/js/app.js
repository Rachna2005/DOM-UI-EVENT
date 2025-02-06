const node = document.getElementById("container1").lastElementChild;
      document.getElementById("container2").appendChild(node);

      const item = document.getElementById("container2");
      item.removeChild(item.firstElementChild);

      const item1 = document.getElementById("container3");
      const item2 = document.createElement("div");
      item2.classList.add ("item");
      item2.textContent = "10";
      item1.appendChild(item2);

      const addClass = document.getElementById("container1");
      addClass.classList.add("active")
      const addClass1 = document.getElementById("container3");
      addClass1.classList.add("active")