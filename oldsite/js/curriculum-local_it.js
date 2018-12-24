var curriculum = {
     "firstName": "Nicolò",
     "lastName": "Calzavara",
     "gender": "M",
     "dob":"27/07/1986",
     "email":"nicolaos27@gmail.com",
     "phoneNumber": [
                { "type": "home", "number": "" },
                { "type": "mobile", "number": "" }
     ],
     "summary_personal": "Sono un attivo professionista, cerco una carriera che incontri i miei interessi e le mie abilita'.",
     "summary_funny":"Con l'allenamento si riescono a fare cose impensabili.",
     "summary_funny_label":"Un motto che mi descrive: ",
     "education_list" : [
            {   "ed_title": "Universita' degli studi di Padova",
                "ed_course": "Esame di stato di abilitazione alla professione di Ingegnere",
                "ed_location": "Padova",
                "ed_inizio":"01/2012",
                "ed_fine":"",
                "ed_grade":""
            },
            {   "ed_title": "Universita' degli studi di Padova",
                "ed_course": "Laurea Magistrale in Ingegneria Informatica",
                "ed_location": "Padova",
                "ed_inizio":"09/2008",
                "ed_fine":"03/2011",
                "ed_grade":""
            },
            {   "ed_title": "Universita' degli studi di Padova",
                "ed_course": "Laurea triennale in Ingegneria Informatica",
                "ed_location": "Padova",
                "ed_inizio":"09/2005",
                "ed_fine":"09/2008",
                "ed_grade":""
            },
            {   "ed_title": "I.I.S. Newton",
                "ed_course": "Liceo Scientifico PNI",
                "ed_location": "Camposampiero",
                "ed_inizio":"09/2000",
                "ed_fine":"07/2005",
                "ed_grade":""
            }
     ],
     "grade_label": "",
     "office_skills": "Organizzazione e coordinamento del proprio lavoro e dei collaboratori. Attitudine a cercare di trovare una soluzione efficace ai problemi.",
     "summary_prof": "Diffusa esperienza in ambito IT, tecnologie web, manutenzione di servizi e manipolazione di dati.",
     "skills":[
        "High-End Application Software: J2EE",
        "Languages: Java, J2EE, Javascript, Ruby, Perl",
        "Frameworks: Hibernate, JPA, XML, JSON",
        "Tools: eclipse, MAVEN, Ant, UML, ER-Diagram, jBPM"
     ],
     "technologies":"Java, Eclipse, HTML, SQL, Ruby on Rails, Ruby, MySQL, JBoss, J2EE, XML, Struts, jQuery, JavaScript, Maven2, EJB3, Ant, JUnit, CSS, Perl, Sybase, Stored Procedures, XML-RPC, JPA, Web Services, Git, EGit, CVS, XMLBeans, Jenkins, AngularJS, Sinatra, Nokogiri, JSON, Google Maps API, Rake, Bootstrap, HAML, SQLite, Devise, Android.",
     "experience_list":[
         {
             "name":"Previnet S.p.A.",
             "start":"01/2018",
             "end":"oggi",
             "location":"Via E. Forlanini, 24 - 31022 Preganziol (TV)",
             "type":"development",
             "role":"Sviluppatore",
             "details":"Sviluppo e gestione di funzionalità e processi sul portale clienti per la gestione del postvendita di polizze.",
             "environment":"Perl, SQL, Sybase, Java, Jboss AS",
             "projects": [
                 {
                     "name": "servizi polizze",
                     "type": "script/process management",
                     "desc": "",
                     "technologies": "Perl, IPAS, SQL, Sybase, StoredProcedures"
                 },
                 {
                     "name": "Portale di gestione polizze per agenzie/banche",
                     "type": "AngularJS SinglePageApplication",
                     "desc": "",
                     "technologies": "AngularJS, JSON, JEE, Wildfly 11+, Hibernate"
                 }
             ]
         },
         {
             "name":"Aziende del gruppo: Ali s.p.a., Repas Lunch Coupon, Compagnia Dei Salari.",
             "start":"11/2014",
             "end":"01/2018",
             "location":"Via del Viminale, 43 - 00184 Roma",
             "type":"development",
             "role":"Sviluppatore, Operatore IT",
             "details":"Manutenzione del crm aziendale per la gestione candidati, report, documenti e utenze. Analisi, progettazione e migrazione a un nuovo crm per la gestione dei convenzionati.",
             "environment":"Debian, Ruby on Rails, Mysql, Oracle",
             "projects": [
                 {
                     "name": "servizi commerciali convenzionamento",
                     "type": "web application",
                     "desc": "Crm gestione convenzionati, gestione flusso documenti di convenzionamento",
                     "technologies": "Ruby on rails, Mysql"
                 },
                 {
                     "name": "crm aziendale",
                     "type": "web application",
                     "desc": "Gestione curricula, documenti, utenze, crm aziende",
                     "technologies": "Ruby on rails, Mysql, Sphinx"
                 }
             ]
         },
        {
            "name":"Previnet S.p.A.",
            "start":"09/2013",
            "end":"11/2014",
            "location":"Via E. Forlanini, 24 - 31022 Preganziol (TV)",
            "type":"development",
            "role":"Sviluppatore",
            "details":"Analisi, progettazione e gestione di processi automatici e interattivi per la manipolazione, trasmissione, il controllo dei dati.",
            "environment":"Perl, SQL, Sybase, Java, Jboss AS",
            "projects": [
                {
                    "name": "servizi polizze",
                    "type": "script/process management",
                    "desc": "",
                    "technologies": "Perl, IPAS, SQL, Sybase, StoredProcedures"
                },
                {
                    "name": "portale Gate",
                    "type": "Front-end portafoglio polizze cliente",
                    "desc": "",
                    "technologies": "JEE, SQL, Postgresql, StoredProcedures"
                },
                {
                    "name": "Rbm salute portale preventivi",
                    "type": "AngularJS SinglePageApplication",
                    "desc": "",
                    "technologies": "AngularJS, JSON, JEE, RestEasy, Jackson, JbossAS 7, Hibernate"
                }
            ]
        },
        {
            "name":"Infocamere s.c.p.a.",
            "start":"09/2011",
            "end":"09/2013",
            "location": "Sede legale: Via G. B. Morgagni, 13 - 00161 Roma",
            "role":"J2EE DEVELOPER",
            "details":"Supporto allo sviluppo di applicazioni web per la gestione, validazione, controllo di dati legati al sistema camerale.",
            "environment":"JbossAS, Struts 2, EJB, JPA.",
            "projects": [
                {
                    "name": "wscu",
                    "type": "webservice",
                    "desc": "",
                    "technologies": "maven, JEE, axis2, axis, JbossAS 5"
                },
                {
                    "name": "starcheck",
                    "type": "library, web interface",
                    "desc": "",
                    "technologies": "struts2, JEE, maven, JbossAS 5"
                },
                {
                    "name": "trasmissioni massive",
                    "type": "jbpm EJB service",
                    "desc": "",
                    "technologies": "EJB3, JEE, jBPM"
                }
            ]
        },
        {
            "name":"IKS s.r.l.",
            "start":"06/2011",
            "end":"today",
            "location":"Padova: C.so Stati Uniti, 14 bis - 35127",
            "type":"development",
            "role":"Sviluppatore",
            "details":"Sviluppo di Applicazioni Enterprise J2EE. Utilizzo di application server Jboss. Front-end con framework Struts 2. Back-end con Enterprise Java Beans e JPA.",
            "environment":"Jboss AS, JAXB, Oracle, Hibernate"
        },
        {
            "name":"Ne-t by Telerete Nordest s.r.l.",
            "start":"06/2011",
            "end":"today",
            "location":"Via Salboro 22/b - 35124 Padova (PD)",
            "type":"development",
            "role":"Sviluppatore",
            "details":"Analisi e sviluppo di applicazioni per smartphone multipiattaforma tramite il framework Phonegap. Realizzazione di pagine web dinamiche e interattive utilizzando le API di Phonegap. Programmazione di applicazioni per i sistemi operativi Symbian, Blackberry, Android. Realizzazione di un'applicazione demo per Android e Blackberry per la vendita di biglietti del tram tramite SMS.",
            "environment":"Javascript, Html, Java, Tomcat",
            "projects": [
                {
                    "name": "phonegap",
                    "type": "framework mobile app",
                    "desc": "",
                    "technologies": "phonegap, HTML, CSS, JavaScript"
                },
                {
                    "name": "android",
                    "type": "Native App",
                    "desc": "",
                    "technologies": "Java, Android"
                }
            ]
        }
     ],
     "hobbies": [ "tecnologie web", "sci", "triathlon", "ciclismo", "piscina"
     ],

     "photo_path": "img/avatar.png",
     "alt_photo": "Photo of Calzavara Nicolò"
};
