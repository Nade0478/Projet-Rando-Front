import React from 'react';

const Privacy = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Politique de Confidentialité</h1>
      <p>
        Chez Rando Ouest, nous nous engageons à protéger la confidentialité et la sécurité de vos
        informations personnelles. Cette politique explique comment nous collectons, utilisons et
        protégeons vos données.
      </p>

      <h2>1. Collecte des informations</h2>
      <p>Nous collectons les informations suivantes lorsque vous utilisez notre site :</p>
      <ul>
        <li>Informations personnelles : nom, adresse email (fournis lors de la création de contenu ou du contact).</li>
        <li>Informations sur l’utilisation : pages visitées, interactions avec le site, etc.</li>
        <li>Fichiers téléchargés ou publiés : par exemple, les images associées aux articles de blog.</li>
      </ul>

      <h2>2. Utilisation des informations</h2>
      <p>
        Vos données sont utilisées aux fins suivantes :
      </p>
      <ul>
        <li>Afficher et partager vos avis sur les chemins de randonnées.</li>
        <li>Améliorer l'expérience utilisateur sur le site.</li>
        <li>Publier et afficher vos contributions (comme les articles de blog ou les images).</li>
        <li>Répondre à vos questions ou demandes via notre formulaire de contact.</li>
      </ul>

      <h2>3. Partage des informations</h2>
      <p>
        Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :
      </p>
      <ul>
        <li>Lorsque la loi l'exige.</li>
        <li>Avec des prestataires de services nécessaires pour gérer ou héberger notre site.</li>
      </ul>

      <h2>4. Sécurité des données</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données
        contre tout accès non autorisé, perte, ou altération.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Notre site utilise des cookies pour améliorer votre navigation. Vous pouvez configurer votre
        navigateur pour désactiver ces cookies, bien que certaines fonctionnalités du site puissent
        être affectées.
      </p>

      <h2>6. Vos droits</h2>
      <p>Conformément à la législation en vigueur, vous avez les droits suivants :</p>
      <ul>
        <li>Droit d'accès à vos données personnelles.</li>
        <li>Droit de rectification ou de suppression de vos données.</li>
        <li>Droit de limitation ou d'opposition au traitement de vos données.</li>
      </ul>
      <p>
        Pour exercer ces droits, veuillez nous contacter à l’adresse email suivante :{' '}
        <a href="mailto:privacy@randouest.fr">privacy@randouest.fr</a>.
      </p>

      <h2>7. Modifications de la Politique</h2>
      <p>
        Cette politique peut être mise à jour. Toute modification sera publiée sur cette page avec
        une date de mise à jour.
      </p>

      <p style={{ marginTop: '20px' }}>
        Dernière mise à jour : [date].
      </p>
    </div>
  );
};

export default Privacy;
