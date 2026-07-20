type FooterLogoProps = {
    logoSrc: string;
    altText: string;
}

function FooterLogo({ logoSrc, altText }: FooterLogoProps) {
    return (
        <div className="footerItem">
            <img src={logoSrc} alt={altText} />
        </div>
    );
}

export default FooterLogo;