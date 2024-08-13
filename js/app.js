// header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');

    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    logoDiv.textContent = 'formcarry';
    header.appendChild(logoDiv);

    const navDiv = document.createElement('div');
    navDiv.className = 'nav';
    const navUl = document.createElement('ul');
    const navItems = ['FAQ', 'Docs', 'Integrations', 'Pricing'];

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = item;
        li.appendChild(a);
        navUl.appendChild(li);
    });

    navDiv.appendChild(navUl);
    header.appendChild(navDiv);

    const loginDiv = document.createElement('div');
    loginDiv.className = 'login';
    const loginText = document.createElement('div');
    loginText.textContent = 'Login';
    const signUpButton = document.createElement('button');
    signUpButton.textContent = 'Sign up';

    loginDiv.appendChild(loginText);
    loginDiv.appendChild(signUpButton);
    header.appendChild(loginDiv);
});

// main
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('.main');

   
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'COLLECT FORM SUBMISSIONS';
    main.appendChild(link);

  
    const emailsDiv = document.createElement('div');
    emailsDiv.className = 'emails';
    emailsDiv.textContent = 'Get emails and messages from your HTML form';
    main.appendChild(emailsDiv);

    const codeDiv = document.createElement('div');
    codeDiv.className = 'code';
    codeDiv.textContent = 'Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with apps.';
    main.appendChild(codeDiv);

    const button = document.createElement('button');
    button.textContent = 'Get Started';
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
    main.appendChild(button);
});

// footer
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');

    
    const rightsDiv = document.createElement('div');
    rightsDiv.textContent = 'formcarry. all rights reserved';
    footer.appendChild(rightsDiv);

   
    const termsDiv = document.createElement('div');
    termsDiv.className = 'terms';

    const termsOfService = document.createElement('div');
    termsOfService.textContent = 'Terms of Service';
    termsDiv.appendChild(termsOfService);

    const privacyPolicy = document.createElement('div');
    privacyPolicy.textContent = 'Privacy Policy';
    termsDiv.appendChild(privacyPolicy);

    footer.appendChild(termsDiv);

    const iconsDiv = document.createElement('div');
    iconsDiv.className = 'icons';

    const twitterIcon = document.createElement('img');
    twitterIcon.src = './img/twitter.svg';
    twitterIcon.alt = 'twitter-icon';
    iconsDiv.appendChild(twitterIcon);

    const facebookIcon = document.createElement('img');
    facebookIcon.src = './img/facebook.svg';
    facebookIcon.alt = 'facebook-icon';
    iconsDiv.appendChild(facebookIcon);

    const githubIcon = document.createElement('img');
    githubIcon.src = './img/git hub.svg';
    githubIcon.alt = 'github-icon';
    iconsDiv.appendChild(githubIcon);

    footer.appendChild(iconsDiv);
});