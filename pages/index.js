function Home() {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Política de Privacidade - Karaoke Battle</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #121212;
            color: #E0E0E0;
            line-height: 1.7;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        h1 {
            color: #00E5FF;
            font-size: 2em;
            margin-bottom: 10px;
            letter-spacing: 2px;
        }
        h2 {
            color: #FF007F;
            font-size: 1.4em;
            margin-top: 30px;
            margin-bottom: 10px;
            border-bottom: 1px solid #333;
            padding-bottom: 5px;
        }
        p { margin-bottom: 15px; color: #CCC; }
        ul { margin-left: 20px; margin-bottom: 15px; }
        li { margin-bottom: 8px; color: #CCC; }
        .subtitle {
            color: #888;
            font-size: 0.95em;
            margin-bottom: 30px;
        }
        a { color: #00E5FF; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #333;
            color: #666;
            font-size: 0.85em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎤 Karaoke Battle</h1>
        <p class="subtitle">Política de Privacidade</p>
        <p class="subtitle">Última atualização: 7 de março de 2026</p>

        <p>
            Esta política de privacidade descreve como o aplicativo <strong>Karaoke Battle</strong> 
            ("nós", "nosso" ou "app") coleta, usa e protege as informações dos usuários.
        </p>

        <h2>1. Informações que Coletamos</h2>
        <p>
            O Karaoke Battle é um jogo offline que <strong>não coleta informações pessoais identificáveis</strong> 
            diretamente. Não solicitamos nome, e-mail, telefone ou qualquer dado pessoal para utilizar o aplicativo.
        </p>
        <p>As únicas informações armazenadas localmente no seu dispositivo são:</p>
        <ul>
            <li><strong>Preferências do app</strong>: se o tutorial já foi visualizado (armazenado via AsyncStorage no próprio dispositivo).</li>
            <li><strong>Nomes dos grupos</strong>: inseridos durante o jogo, armazenados apenas temporariamente na memória do app e não persistidos.</li>
        </ul>

        <h2>2. Serviços de Terceiros</h2>
        <p>O aplicativo utiliza os seguintes serviços de terceiros:</p>

        <h3 style="color: #FFE01B; margin-top: 15px; margin-bottom: 8px;">Google AdMob</h3>
        <p>
            Utilizamos o <strong>Google AdMob</strong> para exibir anúncios no aplicativo. O Google AdMob pode 
            coletar e usar dados conforme sua própria política de privacidade, incluindo:
        </p>
        <ul>
            <li>Identificadores de publicidade do dispositivo</li>
            <li>Endereço IP</li>
            <li>Informações do dispositivo (modelo, sistema operacional)</li>
            <li>Dados de interação com anúncios</li>
        </ul>
        <p>
            Para mais informações, consulte a 
            <a href="https://policies.google.com/privacy" target="_blank">Política de Privacidade do Google</a>.
        </p>
        <p>
            Nosso app solicita anúncios <strong>não personalizados</strong> por padrão, o que limita a coleta 
            de dados para fins publicitários.
        </p>

        <h2>3. Armazenamento de Dados</h2>
        <p>
            Todos os dados do aplicativo são armazenados <strong>localmente no seu dispositivo</strong> utilizando 
            AsyncStorage. Nenhum dado é enviado para servidores nossos. Ao desinstalar o aplicativo, todos os 
            dados locais são removidos automaticamente.
        </p>

        <h2>4. Segurança</h2>
        <p>
            Como não coletamos dados pessoais em nossos servidores, os riscos de vazamento de dados são minimizados. 
            Os dados locais são protegidos pelo sistema de segurança do seu dispositivo Android.
        </p>

        <h2>5. Privacidade de Crianças</h2>
        <p>
            O Karaoke Battle não é direcionado a crianças menores de 13 anos. Não coletamos conscientemente 
            informações pessoais de crianças. Se você é pai/mãe ou responsável e acredita que seu filho forneceu 
            informações pessoais, entre em contato conosco.
        </p>

        <h2>6. Alterações nesta Política</h2>
        <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta 
            página regularmente para quaisquer alterações. Alterações são efetivas quando publicadas nesta página.
        </p>

        <h2>7. Contato</h2>
        <p>
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:
        </p>
        <ul>
            <li><strong>E-mail</strong>: <a href="mailto:conradoms.tech@gmail.com">conradoms.tech@gmail.com</a></li>
            <li><strong>Desenvolvedor</strong>: Conrado</li>
        </ul>

        <div class="footer">
            <p>&copy; 2026 Karaoke Battle. Todos os direitos reservados.</p>
        </div>
    </div>
</body>
</html>
`;
}

export default Home;
