Angular 4

Conceito de single page aplication ou mais conhecido como spa, ou seja a pagina é carregada uma unica vez, e toda a navegação de novas páginas não há requisição de novas páfinas ao servidor, somente terão requisições a api's de dados.

Versões usada do cli: @angular/cli@1.2.6 


Provalvemente se for usar instalar a versão padrão do angular sempre pegara a versão atual, para pegar a versão do curso foi instalada a versão 4.0.0

Comando Prompt : npm install -g @angular/cli@1.2.6 


Criando o projeto

Comando Prompt : ng new nome_projeto
Criação de um novo projeto angular

Comando Prompt : ng server / ng serve
Faz o build do projeto, e cria um servidor. Basta estar em diretorio com um projeto angular

Estrutura de pastas/arquivos

Pastas:
node_modules : Dependencias do projeto

src : toda a codificação da aplicação/projeto
src/assets -> arquivos estaticos basicamente imagens.
app : arquivos de componentes e desenvolvimento


arquivos:

package.json: descrição das depencias da aplicação , e depencias de desenvolvimento
neste arquivo contem:
Desenvolvimento: somente utilizados em modo de desenvolvimento
Dependencias: são necessarias para ir para produção.
scripts: alias para comandos.


tsconfig.json -> arquivo de configuração do typescript do projeto

angular-cli-.json -> parametrizar informações basicas do projeto angular
main.ts -> arquivo principal para dizer qual será o modulo inicial.

----------------------
seletores
------------
@Component({
    selector:'app-topo', -> é tag para ser utilizada direta -> <app-topo></app-topo>
    selector:'.app-topo', -> é class para ser utilizada no seletor html -> <div class="app-topo"></div>
    selector:'[app-topo]', -> é propriedade para ser utilizada no seletor html-> <div app-topo></div>

---------

Comando Prompt: ng generate component nome-componente
gera os arquivos do componente dentro da estrutura do projeto.
----------
Comando Prompt: ng g c nome-componente --spec=false
atalho para gerar os arquivos do componente dentro da estrutura do projeto, especificando os arquivos que não quer que seja gerado, no caso o arquivo spec

------------------------------
ciclos de vida hooks angular, ao ser utilizados precisam ser importados

ngOnChanges
ngOnInit
ngOnCheck
ngDoCheck
ngAfterContentInit
ngAfterConentChecked
ngAfterViewInit
bgAfterViewChecked
ngOnDestroy
---

build e deploy

ng build - gera com arquivos .map

ng build --dev gera o build de desenvolvimento

ng build --prod --aot=false -> gera o build de produção com hashs nos arquivos para evitar problemas de cache em produção.

----

colocar os arquivos da pasta dist em um servidor http





