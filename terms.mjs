export const asIsTerms = Object.freeze([
  'Logto',
  'Logto OSS',
  'Logto Cloud',
  'Management API',
  'Experience API',
  'Account API',
  'OpenID Connect',
  'OAuth 2.0',
  'JSON Web Token',
  'RBAC',
  'ABAC',
  'JWT',
  'SAML',
  'SSO',
  'API',
  'CLI',
  'SDK',
  'IdP',
  'MFA',
  'Webhook',
]);

/**
 * Terms that should have fixed translations. The first level key is the locale, the second level key is the term, and the value is the translation.
 */
export const terms = Object.freeze({
  'zh-CN': {
    Authentication: '认证',
    Authorization: '授权',
    'Opaque token': '不透明令牌',
    'Opaque tokens': '不透明令牌',
    'Access token': '访问令牌',
    'Access tokens': '访问令牌',
    'Refresh token': '刷新令牌',
    'Refresh tokens': '刷新令牌',
    'Organization token': '组织令牌',
    'Organization tokens': '组织令牌',
    'ID token': 'ID 令牌',
    'ID tokens': 'ID 令牌',
    Issuer: '发行者',
    Issuers: '发行者',
    Role: '角色',
    Roles: '角色',
    Audience: '受众',
    Audiences: '受众',
    Subject: '主体',
    Subjects: '主体',
    Scope: '权限',
    Scopes: '权限',
    Permission: '权限',
    Permissions: '权限',
    Claim: '声明',
    Claims: '声明',
    Organization: '组织',
    Organizations: '组织',
    Connector: '连接器',
    Connectors: '连接器',
    'Resource indicator': '资源指示器',
    'Resource indicators': '资源指示器',
    'Consent screen': '用户授权页面',
    'Machine-to-machine': '机器对机器',
    Experience: '体验',
    'API resource': 'API 资源',
    'API resources': 'API 资源',
    'Role-based access control': '基于角色的访问控制 (RBAC)',
    'User impersonation': '用户模拟',
    'Identity provider': '身份提供商 (IdP)',
    'Single sign-on': '单点登录 (SSO)',
    'Enterprise SSO': '企业单点登录 (SSO)',
    'Multi-factor authentication': '多因素认证 (MFA)',
    'Authentication request': '认证请求',
    'Authorization request': '授权请求',
    'Token request': '令牌请求',
    'Authorization token': '授权令牌',
  },
  fr: {
    Authentication: 'Authentification',
    Authorization: 'Autorisation',
    'Opaque token': 'Jeton opaque',
    'Opaque tokens': 'Jetons opaques',
    'Access token': 'Jeton d’accès',
    'Access tokens': 'Jetons d’accès',
    'Refresh token': 'Jeton de rafraîchissement',
    'Refresh tokens': 'Jetons de rafraîchissement',
    'Organization token': 'Jeton d’organisation',
    'Organization tokens': 'Jetons d’organisation',
    'ID token': 'Jeton d’identifiant',
    'ID tokens': 'Jetons d’identifiant',
    Issuer: 'Émetteur',
    Issuers: 'Émetteurs',
    Role: 'Rôle',
    Roles: 'Rôles',
    Audience: 'Audience',
    Audiences: 'Audiences',
    Subject: 'Sujet',
    Subjects: 'Sujets',
    Scope: 'Portée',
    Scopes: 'Portées',
    Permission: 'Permission',
    Permissions: 'Permissions',
    Claim: 'Revendication',
    Claims: 'Revendications',
    Organization: 'Organisation',
    Organizations: 'Organisations',
    Connector: 'Connecteur',
    Connectors: 'Connecteurs',
    'Resource indicator': 'Indicateur de ressource',
    'Resource indicators': 'Indicateurs de ressource',
    'Consent screen': 'Écran de consentement',
    'Machine-to-machine': 'Machine à machine',
    Experience: 'Expérience',
    'API resource': 'Ressource API',
    'API resources': 'Ressources API',
    'Role-based access control': 'Contrôle d’accès basé sur les rôles (RBAC)',
    'User impersonation': 'Usurpation d’identité utilisateur',
    'Identity provider': 'Fournisseur d’identité (IdP)',
    'Single sign-on': 'Authentification unique (SSO)',
    'Enterprise SSO': 'SSO d’entreprise',
    'Multi-factor authentication': 'Authentification multi-facteurs (MFA)',
    'Authentication request': 'Requête d’authentification',
    'Authorization request': 'Requête d’autorisation',
    'Token request': 'Requête de jeton',
    'Authorization token': 'Jeton d’autorisation',
  },
  de: {
    Authentication: 'Authentifizierung',
    Authorization: 'Autorisierung',
    'Opaque token': 'Opaker Token',
    'Opaque tokens': 'Opake Tokens',
    'Access token': 'Zugangstoken',
    'Access tokens': 'Zugangstokens',
    'Refresh token': 'Auffrischungstoken',
    'Refresh tokens': 'Auffrischungstokens',
    'Organization token': 'Organisationstoken',
    'Organization tokens': 'Organisationstokens',
    'ID token': 'ID-Token',
    'ID tokens': 'ID-Tokens',
    Issuer: 'Aussteller',
    Issuers: 'Aussteller',
    Role: 'Rolle',
    Roles: 'Rollen',
    Audience: 'Zielgruppe',
    Audiences: 'Zielgruppen',
    Subject: 'Subjekt',
    Subjects: 'Subjekte',
    Scope: 'Berechtigung',
    Scopes: 'Berechtigungen',
    Permission: 'Berechtigung',
    Permissions: 'Berechtigungen',
    Claim: 'Anspruch',
    Claims: 'Ansprüche',
    Organization: 'Organisation',
    Organizations: 'Organisationen',
    Connector: 'Connector',
    Connectors: 'Connectors',
    'Resource indicator': 'Ressourcenindikator',
    'Resource indicators': 'Ressourcenindikatoren',
    'Consent screen': 'Zustimmungsbildschirm',
    'Machine-to-machine': 'Maschine-zu-Maschine',
    Experience: 'Erfahrung',
    'API resource': 'API-Ressource',
    'API resources': 'API-Ressourcen',
    'Role-based access control': 'Rollenbasierte Zugangskontrolle (RBAC)',
    'User impersonation': 'Benutzermimikry',
    'Identity provider': 'Identitätsanbieter (IdP)',
    'Multi-factor authentication': 'Multi-Faktor-Authentifizierung (MFA)',
    'Authentication request': 'Authentifizierungsanfrage',
    'Authorization request': 'Autorisierungsanfrage',
    'Token request': 'Token-Anfrage',
    'Authorization token': 'Autorisierungstoken',
  },
  'pt-BR': {
    Authentication: 'Autenticação',
    Authorization: 'Autorização',
    'Opaque token': 'Token opaco',
    'Opaque tokens': 'Tokens opacos',
    'Access token': 'Token de acesso',
    'Access tokens': 'Tokens de acesso',
    'Refresh token': 'Token de atualização',
    'Refresh tokens': 'Tokens de atualização',
    'Organization token': 'Token de organização',
    'Organization tokens': 'Tokens de organização',
    'ID token': 'Token de ID',
    'ID tokens': 'Tokens de ID',
    Issuer: 'Emissor',
    Issuers: 'Emissores',
    Role: 'Papel',
    Roles: 'Papéis',
    Audience: 'Público',
    Audiences: 'Públicos',
    Subject: 'Sujeito',
    Subjects: 'Sujeitos',
    Scope: 'Escopo',
    Scopes: 'Escopos',
    Permission: 'Permissão',
    Permissions: 'Permissões',
    Claim: 'Reivindicação',
    Claims: 'Reivindicações',
    Organization: 'Organização',
    Organizations: 'Organizações',
    Connector: 'Conector',
    Connectors: 'Conectores',
    'Resource indicator': 'Indicador de recurso',
    'Resource indicators': 'Indicadores de recurso',
    'Consent screen': 'Tela de consentimento',
    'Machine-to-machine': 'Máquina para máquina',
    Experience: 'Experiência',
    'API resource': 'Recurso de API',
    'API resources': 'Recursos de API',
    'Role-based access control': 'Controle de acesso baseado em papel (RBAC)',
    'User impersonation': 'Imitação de usuário',
    'Identity provider': 'Provedor de identidade (IdP)',
    'Single sign-on': 'Autenticação única (SSO)',
    'Enterprise SSO': 'SSO corporativo (SSO)',
    'Multi-factor authentication': 'Autenticação multifatorial (MFA)',
    'Authentication request': 'Solicitação de autenticação',
    'Authorization request': 'Solicitação de autorização',
    'Token request': 'Solicitação de token',
    'Authorization token': 'Token de autorização',
  },
});

export const patterns = Object.freeze({
  'zh-CN': {
    'Set up social login with {provider}': '设置 {provider} 社交登录',
    'Add authentication to your {framework} application':
      '为你的 {framework} 应用添加认证 (Authentication)',
    'Set up email verification with {provider}': '使用 {provider} 设置电子邮件验证',
    'Set up SMS verification with {provider}': '使用 {provider} 设置短信验证',
    'Set up Single Sign-On with {provider}': '设置 {provider} 单点登录',
  },
  fr: {
    'Set up social login with {provider}': 'Configurer la connexion sociale avec {provider}',
    'Add authentication to your {framework} application':
      'Ajoutez l’authentification à votre application {framework}',
    'Set up email verification with {provider}':
      'Configurer la vérification par e-mail avec {provider}',
    'Set up SMS verification with {provider}': 'Configurer la vérification par SMS avec {provider}',
    'Set up Single Sign-On with {provider}': 'Configurer l’authentification unique avec {provider}',
  },
  de: {
    'Set up social login with {provider}': 'Soziale Anmeldung mit {provider} einrichten',
    'Add authentication to your {framework} application':
      'Authentifizierung zu deiner {framework}-Anwendung hinzufügen',
    'Set up email verification with {provider}': 'E-Mail-Verifizierung mit {provider} einrichten',
    'Set up SMS verification with {provider}': 'SMS-Verifizierung mit {provider} einrichten',
    'Set up Single Sign-On with {provider}': 'Single Sign-On mit {provider} einrichten',
  },
  'pt-BR': {
    'Set up social login with {provider}': 'Configurar login social com {provider}',
    'Add authentication to your {framework} application':
      'Adicionar autenticação ao seu aplicativo {framework}',
    'Set up email verification with {provider}': 'Configurar verificação de email com {provider}',
    'Set up SMS verification with {provider}': 'Configurar verificação SMS com {provider}',
    'Set up Single Sign-On with {provider}': 'Configurar Single Sign-On com {provider}',
  },
});
