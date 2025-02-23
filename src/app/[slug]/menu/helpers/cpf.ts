export const isValidCpf = (cpf: string): boolean => {
    // Remover caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');
  
    // Verificar se o CPF tem 11 caracteres
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false; // CPF inválido se for composto por números repetidos
    }
  
    let sum = 0;
    // Cálculo para o primeiro dígito verificador
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
  
    let firstVerifier = (sum * 10) % 11;
    if (firstVerifier === 10 || firstVerifier === 11) {
      firstVerifier = 0;
    }
  
    if (firstVerifier !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    sum = 0;
    // Cálculo para o segundo dígito verificador
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
  
    let secondVerifier = (sum * 10) % 11;
    if (secondVerifier === 10 || secondVerifier === 11) {
      secondVerifier = 0;
    }
  
    return secondVerifier === parseInt(cpf.charAt(10));
  };
  