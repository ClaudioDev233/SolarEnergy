export function retornaGeracoesPorMes(geracaoCompleta) {
  const grupoMes = [];

  geracaoCompleta = geracaoCompleta.sort(sorted);

  geracaoCompleta.forEach((parGeracaoMes) => {
    if (
      !grupoMes.filter((itemGrupoMes) => parGeracaoMes.mes === itemGrupoMes.mes)
        .length > 0
    ) {
      grupoMes.push({
        mes: parGeracaoMes.mes, // ussi aqui ta bugando
        geracao_energia: parseInt(parGeracaoMes.energia_gerada),
      });
    } else {
      grupoMes.forEach((itemGrupoMes) => {
        if (itemGrupoMes.mes === parGeracaoMes.mes) {
          itemGrupoMes.geracao_energia += parseInt(
            parGeracaoMes.energia_gerada
          );
        }
      });
    }
  });

  return grupoMes;
}

function sorted(item1, item2) {
  return parseInt(item1.mes) > parseInt(item2.mes); //transformar em data e comparar a data
}

/* function converteMesLabel(grupoMes) {
  const [ano, mes] = grupoMes.split("-");
  const mesFormatado = MESES.filter((digitos) => digitos.digito === mes)[0].mes;

  return mesFormatado + "/" + ano;
} */

/* const MESES = [
  { mes: "Jan", digito: "01" },
  { mes: "Fev", digito: "02" },
  { mes: "Mar", digito: "03" },
  { mes: "Abr", digito: "04" },
  { mes: "Mai", digito: "05" },
  { mes: "Jun", digito: "06" },
  { mes: "Jul", digito: "07" },
  { mes: "Ago", digito: "08" },
  { mes: "Set", digito: "09" },
  { mes: "Out", digito: "10" },
  { mes: "Nov", digito: "11" },
  { mes: "Dez", digito: "12" },
];
 */
