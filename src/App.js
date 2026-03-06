import './App.css';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [loginData, setLoginData] = useState({ emailLogin: '', senhaLogin: '' });
  const [cadastroData, setCadastroData] = useState({ nomeCadastro: '', emailCadastro: '', senhaCadastro: '', confirmarSenha: '' });
  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => setCurrentPage('inicio')} style={{ cursor: 'pointer' }}>FitZone</div>
          <ul className="navbar-menu">
            <li><a onClick={() => setCurrentPage('inicio')} style={{ cursor: 'pointer' }}>Início</a></li>
            <li><a onClick={() => setCurrentPage('treinos')} style={{ cursor: 'pointer' }}>Treinos</a></li>
            <li><a onClick={() => setCurrentPage('servicos')} style={{ cursor: 'pointer' }}>Serviços</a></li>
            <li><a onClick={() => setCurrentPage('horarios')} style={{ cursor: 'pointer' }}>Horários</a></li>
            <li><a onClick={() => setCurrentPage('contato')} style={{ cursor: 'pointer' }}>Contato</a></li>
            <li><a onClick={() => { setCurrentPage('login'); setAuthTab('login'); }} style={{ cursor: 'pointer' }} className="login-link">Login</a></li>
          </ul>
        </div>
      </nav>

      {/* Pages */}
      {currentPage === 'inicio' && renderInicio()}
      {currentPage === 'treinos' && renderTreinos()}
      {currentPage === 'servicos' && renderServicos()}
      {currentPage === 'horarios' && renderHorarios()}
      {currentPage === 'contato' && renderContato()}
      {currentPage === 'login' && renderLogin()}
    </div>
  );

  /* ========== PÁGINA INÍCIO ========== */
  function renderInicio() {
    return (
      <section className="hero" id="inicio">
        <div className="floating-dumbbell">🏋️</div>
        <div className="floating-bars"></div>

        <div className="hero-content">
          <h1 className="hero-title">Transforme Seu Corpo</h1>
          <p className="hero-subtitle">Treinos personalizados, equipamentos modernos e acompanhamento profissional para seus objetivos fitness.</p>
          <button className="cta-button" onClick={() => setCurrentPage('treinos')}>Explorar Treinos</button>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">2500+</div>
            <div className="stat-label">Membros Ativos</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Aulas Semanais</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">15+</div>
            <div className="stat-label">Personal Trainers</div>
          </div>
        </div>
      </section>
    );
  }

  /* ========== PÁGINA TREINOS ========== */
  function renderTreinos() {
    const treinosData = [
      { id: 1, nome: 'Musculação', desc: 'Ganho de massa muscular com equipamentos de alta qualidade.', icon: '💪' },
      { id: 2, nome: 'Cardio', desc: 'Queima de calorias e melhora da resistência cardiovascular.', icon: '🏃' },
      { id: 3, nome: 'Yoga', desc: 'Flexibilidade, equilíbrio e relaxamento do corpo.', icon: '🧘' },
      { id: 4, nome: 'Pilates', desc: 'Fortalecimento do core e postura correta.', icon: '🤸' },
      { id: 5, nome: 'Crossfit', desc: 'Treino functional intenso para ganho de força explosiva.', icon: '⚡' },
      { id: 6, nome: 'Zumba', desc: 'Dança animada para diversão e queima de gordura.', icon: '💃' },
    ];

    return (
      <section className="section">
        <h1 className="section-title">Nossos Treinos</h1>
        <p className="section-subtitle">Escolha o programa que melhor se adequa aos seus objetivos</p>
        <div className="treinos-grid">
          {treinosData.map(treino => (
            <div key={treino.id} className="treino-card">
              <div className="treino-icon">{treino.icon}</div>
              <h3>{treino.nome}</h3>
              <p>{treino.desc}</p>
              <button className="learn-btn">Saiba Mais</button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* ========== PÁGINA SERVIÇOS ========== */
  function renderServicos() {
    const servicosData = [
      { id: 1, nome: 'Personal Trainer', desc: 'Acompanhamento individual com profissional certificado.', preco: 'A partir de R$ 150' },
      { id: 2, nome: 'Nutrição', desc: 'Plano alimentar personalizado para seus objetivos.', preco: 'A partir de R$ 100' },
      { id: 3, nome: 'Avaliação Física', desc: 'Análise completa de composição corporal e performance.', preco: 'R$ 150' },
      { id: 4, nome: 'Aulas em Grupo', desc: 'Aulas coletivas como Zumba, Yoga, Pilates e mais.', preco: 'Incluído na mensalidade' },
      { id: 5, nome: 'Suplementação', desc: 'Consultoria e venda de suplementos de qualidade.', preco: 'Preços variados' },
      { id: 6, nome: 'Fisioterapia', desc: 'Tratamento de lesões e reabilitação.', preco: 'A partir de R$ 80' },
    ];

    return (
      <section className="section">
        <h1 className="section-title">Nossos Serviços</h1>
        <p className="section-subtitle">Tudo que você precisa para atingir seus objetivos fitness</p>
        <div className="servicos-grid">
          {servicosData.map(servico => (
            <div key={servico.id} className="servico-card">
              <h3>{servico.nome}</h3>
              <p>{servico.desc}</p>
              <div className="preco">{servico.preco}</div>
              <button className="contact-btn">Contratar</button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* ========== PÁGINA HORÁRIOS ========== */
  function renderHorarios() {
    const horarios = [
      { aula: 'Musculação', seg: '6h-22h', ter: '6h-22h', qua: '6h-22h', qui: '6h-22h', sex: '6h-22h', sab: '8h-18h', dom: '8h-16h' },
      { aula: 'Yoga', seg: '7h, 17h', ter: '7h, 17h', qua: '7h, 17h', qui: '7h, 17h', sex: '7h, 17h', sab: '9h', dom: '-' },
      { aula: 'Pilates', seg: '8h, 18h', ter: '8h, 18h', qua: '8h, 18h', qui: '8h, 18h', sex: '8h, 18h', sab: '10h', dom: '-' },
      { aula: 'Zumba', seg: '19h', ter: '19h', qua: '-', qui: '19h', sex: '19h', sab: '11h', dom: '-' },
      { aula: 'Cardio', seg: '6h-22h', ter: '6h-22h', qua: '6h-22h', qui: '6h-22h', sex: '6h-22h', sab: '8h-18h', dom: '8h-16h' },
    ];

    return (
      <section className="section">
        <h1 className="section-title">Horários</h1>
        <p className="section-subtitle">Confira os horários de funcionamento e aulas</p>
        <div className="horarios-container">
          <table className="horarios-table">
            <thead>
              <tr>
                <th>Aula</th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
                <th>Sexta</th>
                <th>Sábado</th>
                <th>Domingo</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((item, idx) => (
                <tr key={idx}>
                  <td className="aula-nome"><strong>{item.aula}</strong></td>
                  <td>{item.seg}</td>
                  <td>{item.ter}</td>
                  <td>{item.qua}</td>
                  <td>{item.qui}</td>
                  <td>{item.sex}</td>
                  <td>{item.sab}</td>
                  <td>{item.dom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="info-box">
          <p><strong>Atendimento:</strong> Segunda a Sexta 6h às 22h | Sábado 8h às 18h | Domingo 8h às 16h</p>
        </div>
      </section>
    );
  }

  /* ========== PÁGINA CONTATO ========== */
  function renderContato() {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setEnviado(true);
      setTimeout(() => setEnviado(false), 3000);
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    };

    return (
      <section className="section">
        <h1 className="section-title">Contato</h1>
        <p className="section-subtitle">Entre em contato conosco para mais informações</p>
        
        <div className="contato-container">
          <div className="contato-info">
            <div className="info-item">
              <h3>📍 Localização</h3>
              <p>Av. Principal, 1000<br/>São Paulo, SP 01234-567</p>
            </div>
            <div className="info-item">
              <h3>📞 Telefone</h3>
              <p>(11) 3000-0000<br/>(11) 9 8000-0000</p>
            </div>
            <div className="info-item">
              <h3>📧 Email</h3>
              <p>contato@fitzone.com.br<br/>info@fitzone.com.br</p>
            </div>
            <div className="info-item">
              <h3>🕐 Horário de Atendimento</h3>
              <p>Segunda a Sexta: 6h às 22h<br/>Sábado: 8h às 18h<br/>Domingo: 8h às 16h</p>
            </div>
          </div>

          <form className="contato-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="nome" 
              placeholder="Seu nome" 
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Seu email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="tel" 
              name="telefone" 
              placeholder="Seu telefone" 
              value={formData.telefone}
              onChange={handleChange}
            />
            <textarea 
              name="mensagem" 
              placeholder="Sua mensagem (mínimo 10 caracteres)" 
              rows="6"
              value={formData.mensagem}
              onChange={handleChange}
              minLength="10"
              required
            ></textarea>
            <button type="submit" className="form-submit-btn">Enviar Mensagem</button>
            {enviado && <div className="success-msg">Mensagem enviada com sucesso!</div>}
          </form>
        </div>
      </section>
    );
  }

  /* ========== PÁGINA LOGIN/CADASTRO ========== */
  function renderLogin() {
    const handleLoginChange = (e) => {
      const { name, value } = e.target;
      setLoginData({ ...loginData, [name]: value });
    };

    const handleCadastroChange = (e) => {
      const { name, value } = e.target;
      setCadastroData({ ...cadastroData, [name]: value });
    };

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        setLoginData({ emailLogin: '', senhaLogin: '' });
      }, 2000);
    };

    const handleCadastroSubmit = (e) => {
      e.preventDefault();
      if (cadastroData.senhaCadastro !== cadastroData.confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
      }
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        setCadastroData({ nomeCadastro: '', emailCadastro: '', senhaCadastro: '', confirmarSenha: '' });
        setAuthTab('login');
      }, 2000);
    };

    return (
      <section className="auth-section">
        <div className="auth-container">
          <div className="auth-tabs">
            <button 
              className={`auth-tab-btn ${authTab === 'login' ? 'active' : ''}`}
              onClick={() => setAuthTab('login')}
            >
              Login
            </button>
            <button 
              className={`auth-tab-btn ${authTab === 'cadastro' ? 'active' : ''}`}
              onClick={() => setAuthTab('cadastro')}
            >
              Cadastro
            </button>
          </div>

          {authTab === 'login' && (
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <h2>Bem-vindo de volta!</h2>
              <p className="auth-subtitle">Faça login para acessar sua conta</p>
              <input 
                type="email" 
                name="emailLogin" 
                placeholder="Seu email" 
                value={loginData.emailLogin}
                onChange={handleLoginChange}
                required
              />
              <input 
                type="password" 
                name="senhaLogin" 
                placeholder="Sua senha" 
                value={loginData.senhaLogin}
                onChange={handleLoginChange}
                required
              />
              <a href="#" className="forgot-password">Esqueceu a senha?</a>
              <button type="submit" className="auth-submit-btn">Entrar</button>
              {loginSuccess && <div className="auth-success">Login realizado com sucesso! 🎉</div>}
            </form>
          )}

          {authTab === 'cadastro' && (
            <form className="auth-form" onSubmit={handleCadastroSubmit}>
              <h2>Junte-se à FitZone!</h2>
              <p className="auth-subtitle">Crie sua conta e comece sua transformação</p>
              <input 
                type="text" 
                name="nomeCadastro" 
                placeholder="Seu nome completo" 
                value={cadastroData.nomeCadastro}
                onChange={handleCadastroChange}
                required
              />
              <input 
                type="email" 
                name="emailCadastro" 
                placeholder="Seu email" 
                value={cadastroData.emailCadastro}
                onChange={handleCadastroChange}
                required
              />
              <input 
                type="password" 
                name="senhaCadastro" 
                placeholder="Crie uma senha" 
                value={cadastroData.senhaCadastro}
                onChange={handleCadastroChange}
                required
              />
              <input 
                type="password" 
                name="confirmarSenha" 
                placeholder="Confirme a senha" 
                value={cadastroData.confirmarSenha}
                onChange={handleCadastroChange}
                required
              />
              <label className="terms-label">
                <input type="checkbox" required /> Aceito os termos e condições
              </label>
              <button type="submit" className="auth-submit-btn">Criar Conta</button>
              {loginSuccess && <div className="auth-success">Cadastro realizado com sucesso! 🎉</div>}
            </form>
          )}
        </div>
      </section>
    );
  }
}

export default App;
