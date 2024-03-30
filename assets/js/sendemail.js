function composeEmail() {
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const receiverEmail = "gilangtejakrishnaa@gmail.com"; // Email penerima

    const mailtoLink = `mailto:${receiverEmail}?from=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
}