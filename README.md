CÓDIGO DE STATUS| DESCRIÇÃO
200             | OK - A solicitação foi bem-sucedida. O cliente pode ler o resultado da solicitação no corpo e nos cabeçalhos da resposta.
201             | Criado - A solicitação foi atendida e resultou na criação de um novo recurso.
202             | Aceito - A solicitação foi aceita para processamento, mas o processamento não foi concluído.
204             | Sem conteúdo - A solicitação foi bem-sucedida, mas não retorna o corpo da mensagem.
304             | Não modificado. Consulte Solicitações condicionais .
400             | Solicitação inválida - A solicitação não pôde ser compreendida pelo servidor devido à sintaxe malformada. O corpo da mensagem conterá mais informações; veja Esquema de Resposta .
401             | Não autorizado - A solicitação requer autenticação do usuário ou, se a solicitação incluiu credenciais de autorização, a autorização foi recusada para essas credenciais.
403             | Proibido - O servidor entendeu a solicitação, mas se recusa a atendê-la.
404             | Not Found - O recurso solicitado não foi encontrado. Este erro pode ser devido a uma condição temporária ou permanente.
429             | Demasiados pedidos - A limitação de taxa foi aplicada.
500             | Erro do Servidor Interno. Você nunca deve receber este erro porque nossos codificadores inteligentes pegam todos eles...
502             | Bad Gateway - O servidor estava agindo como um gateway ou proxy e recebeu uma resposta inválida do servidor upstream.
503             | Serviço indisponível - O servidor está atualmente incapaz de lidar com a solicitação devido a uma condição temporária que será aliviada após algum atraso. Você pode optar por reenviar a solicitação novamente.