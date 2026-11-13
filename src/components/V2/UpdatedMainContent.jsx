import dog from '../../../public/dog.jpeg';

export const UpdatedMainContent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '60%' }}>
        <h1>Hi, I'm Kristen</h1>
        <h3>
          I'm a developer with an extremely out of date personal website. While I've been working in
          enterprise software, the dependencies for this portfolio site have watched the world move
          on, leaving them behind, neglected in their state of deprecation.
        </h3>
        <h3>While you wait for me to bring things up to date, please enjoy a picture of my dog.</h3>
        <div style={{ maxWidth: '500px' }}>
          <img src={dog.src} style={{ height: 'auto', maxWidth: '100%' }}></img>
        </div>
      </div>
    </div>
  );
};
