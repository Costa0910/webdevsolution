import "../User.scss";
import Collapsible from "../components/Collapsible";

const UserPage = () => {
  return (
    <section className="user">
      <h1>Utilizador</h1>

      <Collapsible title="Tipo de utilizador">
        <div className="user-types">
          <label>
            <input
              type="checkbox"
              name="projectManager"
              aria-label="Project Manager role"
            />
            <span>Project Manager</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="developer"
              defaultChecked
              aria-label="Developer role"
            />
            <span>Developer</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="architect"
              defaultChecked
              aria-label="Architect role"
            />
            <span>Architect</span>
          </label>
        </div>
      </Collapsible>

      <Collapsible title="Contacto">
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              defaultValue="pm@premium-minds.com"
              aria-label="Email input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Palavra-passe</label>
            <input
              id="password"
              type="password"
              defaultValue="••••••••"
              aria-label="Password input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              type="tel"
              defaultValue="+351"
              aria-label="Phone input"
            />
          </div>
        </div>
      </Collapsible>

      <div className="actions">
        <button className="btn-secondary" aria-label="Cancel changes">
          Cancelar
        </button>
        <button className="btn-primary" aria-label="Save changes">
          GUARDAR
        </button>
      </div>
    </section>
  );
};

export default UserPage;
