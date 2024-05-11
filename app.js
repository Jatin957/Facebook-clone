function postStatus() {
    const textarea = document.querySelector('.post-creation textarea');
    if (textarea.value.trim() !== "") {
        const postFeed = document.querySelector('.post-feed');
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.textContent = textarea.value;
        newPost.style.border = '1px solid #ccc';
        newPost.style.padding = '10px';
        newPost.style.marginTop = '10px';
        postFeed.appendChild(newPost);
        textarea.value = ''; // clear the textarea after posting
    } else {
        alert('Please enter some text to post.');
    }
}
