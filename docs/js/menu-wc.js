'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">backend-nestjs-exercise documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-438456befa3bf065625590fc6f0e6c4139efcdec2c7fd598fa84740293661f6b4cf6b030ec37cb742227c115bed994fd5614ad9aab1aa02e216a87d707cd6e2a"' : 'data-target="#xs-controllers-links-module-AppModule-438456befa3bf065625590fc6f0e6c4139efcdec2c7fd598fa84740293661f6b4cf6b030ec37cb742227c115bed994fd5614ad9aab1aa02e216a87d707cd6e2a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-438456befa3bf065625590fc6f0e6c4139efcdec2c7fd598fa84740293661f6b4cf6b030ec37cb742227c115bed994fd5614ad9aab1aa02e216a87d707cd6e2a"' :
                                            'id="xs-controllers-links-module-AppModule-438456befa3bf065625590fc6f0e6c4139efcdec2c7fd598fa84740293661f6b4cf6b030ec37cb742227c115bed994fd5614ad9aab1aa02e216a87d707cd6e2a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-438456befa3bf065625590fc6f0e6c4139efcdec2c7fd598fa84740293661f6b4cf6b030ec37cb742227c115bed994fd5614ad9aab1aa02e216a87d707cd6e2a"' : 'data-target="#xs-injectables-links-module-AppModule-438456befa3bf065625590fc6f0e6c4139efcdec2c7fd598fa84740293661f6b4cf6b030ec37cb742227c115bed994fd5614ad9aab1aa02e216a87d707cd6e2a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-438456befa3bf065625590fc6f0e6c4139efcdec2c7fd598fa84740293661f6b4cf6b030ec37cb742227c115bed994fd5614ad9aab1aa02e216a87d707cd6e2a"' :
                                        'id="xs-injectables-links-module-AppModule-438456befa3bf065625590fc6f0e6c4139efcdec2c7fd598fa84740293661f6b4cf6b030ec37cb742227c115bed994fd5614ad9aab1aa02e216a87d707cd6e2a"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoursesModule.html" data-type="entity-link" >CoursesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CoursesModule-a7e326dd83bcbbb86a55449d5a3452594ecae039914df8361ec91daacf1e9dc11eac2fcf9116f2aa523211a1e8e830b953cfe1ac3f924ee5397cfaf06ca03ff0"' : 'data-target="#xs-controllers-links-module-CoursesModule-a7e326dd83bcbbb86a55449d5a3452594ecae039914df8361ec91daacf1e9dc11eac2fcf9116f2aa523211a1e8e830b953cfe1ac3f924ee5397cfaf06ca03ff0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CoursesModule-a7e326dd83bcbbb86a55449d5a3452594ecae039914df8361ec91daacf1e9dc11eac2fcf9116f2aa523211a1e8e830b953cfe1ac3f924ee5397cfaf06ca03ff0"' :
                                            'id="xs-controllers-links-module-CoursesModule-a7e326dd83bcbbb86a55449d5a3452594ecae039914df8361ec91daacf1e9dc11eac2fcf9116f2aa523211a1e8e830b953cfe1ac3f924ee5397cfaf06ca03ff0"' }>
                                            <li class="link">
                                                <a href="controllers/CourseController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoursesModule-a7e326dd83bcbbb86a55449d5a3452594ecae039914df8361ec91daacf1e9dc11eac2fcf9116f2aa523211a1e8e830b953cfe1ac3f924ee5397cfaf06ca03ff0"' : 'data-target="#xs-injectables-links-module-CoursesModule-a7e326dd83bcbbb86a55449d5a3452594ecae039914df8361ec91daacf1e9dc11eac2fcf9116f2aa523211a1e8e830b953cfe1ac3f924ee5397cfaf06ca03ff0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoursesModule-a7e326dd83bcbbb86a55449d5a3452594ecae039914df8361ec91daacf1e9dc11eac2fcf9116f2aa523211a1e8e830b953cfe1ac3f924ee5397cfaf06ca03ff0"' :
                                        'id="xs-injectables-links-module-CoursesModule-a7e326dd83bcbbb86a55449d5a3452594ecae039914df8361ec91daacf1e9dc11eac2fcf9116f2aa523211a1e8e830b953cfe1ac3f924ee5397cfaf06ca03ff0"' }>
                                        <li class="link">
                                            <a href="injectables/CourseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CourseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProfessorService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfessorService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StudentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-HealthModule-3c1d3197d94ab0749a779220fbe842a73e228f1e02f5b7de88d36f7cf908772f8f4a2ee13c57e97944abf76ccd84d8d71e36a08ff569efa2b01f8974160f367e"' : 'data-target="#xs-controllers-links-module-HealthModule-3c1d3197d94ab0749a779220fbe842a73e228f1e02f5b7de88d36f7cf908772f8f4a2ee13c57e97944abf76ccd84d8d71e36a08ff569efa2b01f8974160f367e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-3c1d3197d94ab0749a779220fbe842a73e228f1e02f5b7de88d36f7cf908772f8f4a2ee13c57e97944abf76ccd84d8d71e36a08ff569efa2b01f8974160f367e"' :
                                            'id="xs-controllers-links-module-HealthModule-3c1d3197d94ab0749a779220fbe842a73e228f1e02f5b7de88d36f7cf908772f8f4a2ee13c57e97944abf76ccd84d8d71e36a08ff569efa2b01f8974160f367e"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/CourseController.html" data-type="entity-link" >CourseController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Course.html" data-type="entity-link" >Course</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Professor.html" data-type="entity-link" >Professor</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Student.html" data-type="entity-link" >Student</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ArticleTable1655032066706.html" data-type="entity-link" >ArticleTable1655032066706</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseDTO.html" data-type="entity-link" >BaseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseEntity.html" data-type="entity-link" >BaseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CourseDTO.html" data-type="entity-link" >CourseDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CourseMapper.html" data-type="entity-link" >CourseMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/CourseRepository.html" data-type="entity-link" >CourseRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/HeaderUtil.html" data-type="entity-link" >HeaderUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Page.html" data-type="entity-link" >Page</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageRequest.html" data-type="entity-link" >PageRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessorDTO.html" data-type="entity-link" >ProfessorDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessorMapper.html" data-type="entity-link" >ProfessorMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfessorRepository.html" data-type="entity-link" >ProfessorRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryExceptionFilter.html" data-type="entity-link" >QueryExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sort.html" data-type="entity-link" >Sort</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentDTO.html" data-type="entity-link" >StudentDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentMapper.html" data-type="entity-link" >StudentMapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/StudentRepository.html" data-type="entity-link" >StudentRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CourseService.html" data-type="entity-link" >CourseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingInterceptor.html" data-type="entity-link" >LoggingInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfessorService.html" data-type="entity-link" >ProfessorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudentService.html" data-type="entity-link" >StudentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});