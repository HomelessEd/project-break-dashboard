const backgroundImages = [
  "https://images.unsplash.com/photo-1638804814328-672eee8b6246?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1540912004911-0999d7f8f367?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1636049470714-34eb842d6e3b?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1625129184888-b7346b570bc5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1701980901736-dcc1db156465?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];


const setRandomBackground = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const imageUrl = backgroundImages[randomIndex];
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
};


setRandomBackground();


setInterval(setRandomBackground, 15000);

