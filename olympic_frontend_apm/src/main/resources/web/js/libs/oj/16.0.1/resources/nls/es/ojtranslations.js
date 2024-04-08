define({"oj-message":{fatal:"Fatal",error:"Error",warning:"Advertencia",info:"Información",confirmation:"Confirmación","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"El valor no tiene el formato esperado.",detail:"Introduzca un valor con el formato esperado.","plural-separator":", ",hint:{summary:"Ejemplo: {exampleValue}",detail:"Inténtelo de nuevo con un formato como el siguiente: {exampleValue}.","detail-plural":"Introduzca un valor con estos formatos: {exampleValue}."},optionHint:{detail:"El valor aceptado para la opción '{propertyName}' es '{propertyValueValid}'.","detail-plural":"Los valores aceptados para la opción '{propertyName}' son '{propertyValueValid}'."},optionTypesMismatch:{summary:"Se necesita un valor para la opción '{requiredPropertyName}' cuando la opción '{propertyName}' se define en '{propertyValue}'."},optionTypeInvalid:{summary:"No se ha proporcionado un valor del tipo esperado para la opción '{propertyName}'."},optionOutOfRange:{summary:"El valor {propertyValue} está fuera del rango para la opción '{propertyName}'."},optionValueInvalid:{summary:"Se ha especificado el valor no válido '{propertyValue}' para la opción '{propertyName}'."},number:{decimalFormatMismatch:{summary:"El valor proporcionado no tiene el formato numérico esperado."},shortLongUnsupportedParse:{summary:"No están soportados 'short' y 'long' para el análisis del conversor.",detail:"Si se cambia el componente en los campos readOnly. readOnly, no se llama a la función de análisis del conversor."},currencyFormatMismatch:{summary:"El valor proporcionado no tiene el formato de moneda esperado."},percentFormatMismatch:{summary:"El valor proporcionado no tiene el formato de porcentaje esperado."},invalidNumberFormat:{summary:"El valor proporcionado no es un número válido.",detail:"Proporcione un número válido."}},color:{invalidFormat:{summary:"Formato de color no válido.",detail:"La especificación de la opción de formato de color no es válida."},invalidSyntax:{summary:"Especificación de color no válida.",detail:"Introduzca un valor de color que cumpla el estándar CSS3."}},datetime:{datetimeOutOfRange:{summary:"El valor '{value}' está fuera del rango para '{propertyName}'.",detail:"Introduzca un valor entre '{minValue}' y '{maxValue}'.",hour:"hora",minute:"minuto",second:"segundo",millisec:"milisegundo",month:"mes",day:"día",year:"año","month name":"nombre del mes",weekday:"día de semana"},dateFormatMismatch:{summary:"El valor proporcionado no tiene el formato de fecha esperado."},invalidTimeZoneID:{summary:"Se ha proporcionado un ID de zona horaria no válido {timeZoneID}."},nonExistingTime:{summary:"La hora de entrada no existe porque ha caído en la transición al horario de verano."},missingTimeZoneData:{summary:"Faltan datos de zona horaria. Llame al parámetro obligatorio 'ojs/ojtimezonedata' para cargar los datos de zona horaria."},timeFormatMismatch:{summary:"El valor proporcionado no tiene el formato de hora esperado."},datetimeFormatMismatch:{summary:"El valor proporcionado no tiene el formato de fecha y hora esperado."},dateToWeekdayMismatch:{summary:"El día '{date}' no coincide con un '{weekday}'.",detail:"Introduzca un día de la semana que coincida con la fecha."},invalidISOString:{invalidRangeSummary:"El valor '{value}' está fuera de rango para el campo '{propertyName}' en la cadena ISO 8601 '{isoStr}'.",summary:"El valor '{isoStr}' proporcionado no es una cadena ISO 8601 válida.",detail:"Proporcione un cadena ISO 8601 válida."}}},"oj-validator":{length:{hint:{min:"Introduzca {min} o más caracteres.",max:"Introduzca {max} o menos caracteres.",inRange:"Introduzca de {min} a {max} caracteres.",exact:"Introduzca {length} caracteres."},messageDetail:{tooShort:"Introduzca {min} o más caracteres.",tooLong:"No introduzca más de {max} caracteres."},messageSummary:{tooShort:"Hay muy pocos caracteres.",tooLong:"Hay demasiados caracteres."}},range:{number:{hint:{min:"Introduzca un número mayor o igual que {min}.",max:"Introduzca un número menor o igual que {max}.",inRange:"Introduzca un número entre {min} y {max}.",exact:"Introduzca el número {num}."},messageDetail:{rangeUnderflow:"Introduzca {min} o un número mayor.",rangeOverflow:"Introduzca {max} o un número menor.",exact:"Introduzca el número {num}."},messageSummary:{rangeUnderflow:"El número es demasiado bajo.",rangeOverflow:"El número es demasiado alto."}},datetime:{hint:{min:"Introduzca una fecha y hora igual o posterior a {min}.",max:"Introduzca un valor de fecha y hora igual o anterior a {max}.",inRange:"Introduzca una fecha y hora entre {min} y {max}."},messageDetail:{rangeUnderflow:"Introduzca una fecha igual o posterior a {min}.",rangeOverflow:"Introduzca una fecha igual o anterior a {max}."},messageSummary:{rangeUnderflow:"El valor de fecha y hora es anterior al valor de fecha y hora mínimo.",rangeOverflow:"El valor de fecha y hora es posterior al valor de fecha y hora máximo."}},date:{hint:{min:"Introduzca una fecha igual o posterior a {min}.",max:"Introduzca una fecha igual o anterior a {max}.",inRange:"Introduzca una fecha entre {min} y {max}."},messageDetail:{rangeUnderflow:"Introduzca una fecha igual o posterior a {min}.",rangeOverflow:"Introduzca una fecha igual o anterior a {max}."},messageSummary:{rangeUnderflow:"El valor de fecha es anterior al valor de fecha mínima.",rangeOverflow:"El valor de fecha es posterior al valor de fecha máxima."}},time:{hint:{min:"Introduzca una hora igual o posterior a {min}.",max:"Introduzca una hora igual o anterior a {max}.",inRange:"Introduzca una hora entre {min} y {max}."},messageDetail:{rangeUnderflow:"Introduzca una hora igual o posterior a {min}.",rangeOverflow:"Introduzca una hora igual o anterior a {max}."},messageSummary:{rangeUnderflow:"El valor de hora es anterior a la hora mínima.",rangeOverflow:"El valor de hora es posterior a la hora máxima."}}},restriction:{date:{messageSummary:"La fecha {value} es de una entrada desactivada.",messageDetail:"La fecha que ha seleccionado no está disponible. Pruebe otra fecha."}},regExp:{summary:"El formato no es correcto. ",detail:"Introduzca valores permitidos descritos en esta expresión regular: '{pattern}'."},required:{summary:"Se necesita el valor.",detail:"Introduzca un valor."}},"oj-ojEditableValue":{loading:"Cargando",requiredText:"Necesario",helpSourceText:"Más información..."},"oj-ojInputDate":{done:"Listo",cancel:"Cancelar",time:"Hora",accessibleClearIconAltText:"Borrar entrada",prevText:"Anterior",nextText:"Siguiente",currentText:"Hoy",weekHeader:"Semana",tooltipCalendar:"Seleccionar Fecha.",tooltipCalendarTime:"Seleccionar fecha/hora.",tooltipCalendarDisabled:"Seleccionar Fecha Desactivada.",tooltipCalendarTimeDisabled:"Seleccionar fecha/hora desactivada.",picker:"Selector",weekText:"Semana",datePicker:"Selector de fecha",inputHelp:"Pulse la tecla arriba y la tecla abajo para acceder al calendario.",inputHelpBoth:"Pulse la tecla arriba y la tecla abajo para acceder al calendario y Mayús + flecha abajo o Mayús + flecha arriba para acceder a la lista desplegable de horas.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{accessibleClearIconAltText:"Borrar entrada",cancelText:"Cancelar",okText:"Aceptar",currentTimeText:"Ahora",hourWheelLabel:"Hora",minuteWheelLabel:"Minuto",ampmWheelLabel:"AMPM",tooltipTime:"Seleccionar Hora.",tooltipTimeDisabled:"Seleccionar Hora Desactivada.",inputHelp:"Pulse la tecla abajo y la tecla arriba para acceder a la lista desplegable de horas.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""},accessibleMaxLengthExceeded:"Se ha superado la longitud máxima de {len}.",accessibleMaxLengthRemaining:"Quedan {chars} caracteres."},"oj-ojInputText":{accessibleClearIcon:"Borrar"},"oj-ojInputPassword":{regexp:{messageDetail:"El valor debe coincidir con este patrón: '{pattern}'."},accessibleShowPassword:"Mostrar contraseña.",accessibleHidePassword:"Ocultar contraseña."},"oj-ojFilmStrip":{labelAccFilmStrip:"Mostrando página {pageIndex} de {pageCount}",labelAccArrowNextPage:"Seleccione Siguiente para mostrar la página siguiente.",labelAccArrowPreviousPage:"Seleccione Anterior para mostrar la página anterior",tipArrowNextPage:"Siguiente",tipArrowPreviousPage:"Anterior"},"oj-ojDataGrid":{accessibleSortAscending:"Valores {id} ordenados en orden ascendente",accessibleSortDescending:"Valores {id} ordenados en orden descendente",accessibleSortable:"{id} se puede ordenar",accessibleActionableMode:"Entrar en modo accionable.",accessibleNavigationMode:"Entre en modo de navegación, pulse F2 para entrar en modo de edición o accionable.",accessibleEditableMode:"Entre en modo de edición, pulse escape para navegar fuera de la cuadrícula de datos.",accessibleSummaryExact:"Es una cuadrícula de datos con {rownum} filas y {colnum} columnas",accessibleSummaryEstimate:"Es una cuadrícula de datos con un número desconocido de filas y columnas",accessibleSummaryExpanded:"Actualmente hay {num} filas ampliadas",accessibleRowExpanded:"Fila ampliada",accessibleExpanded:"Ampliado",accessibleRowCollapsed:"Fila reducida",accessibleCollapsed:"Reducido",accessibleRowSelected:"Fila {row} seleccionada",accessibleColumnSelected:"Columna {column} seleccionada",accessibleStateSelected:"seleccionado",accessibleMultiCellSelected:"{num} celdas seleccionadas",accessibleColumnSpanContext:"{extent} de ancho",accessibleRowSpanContext:"{extent} de alto",accessibleRowContext:"Fila {index}",accessibleColumnContext:"Columna {index}",accessibleRowHeaderContext:"Cabecera de fila {index}",accessibleColumnHeaderContext:"Cabecera de columna {index}",accessibleRowEndHeaderContext:"Cabecera de fin de fila {index}",accessibleColumnEndHeaderContext:"Cabecera de fin de columna {index}",accessibleRowHeaderLabelContext:"Etiqueta de cabecera de fila {level}",accessibleColumnHeaderLabelContext:"Etiqueta de cabecera de columna {level}",accessibleRowEndHeaderLabelContext:"Etiqueta de cabecera de fin de fila {level}",accessibleColumnEndHeaderLabelContext:"Etiqueta de cabecera de fin de columna {level}",accessibleLevelContext:"Nivel {level}",accessibleRangeSelectModeOn:"Modo de adición de rango de celdas seleccionado activado.",accessibleRangeSelectModeOff:"Modo de adición de rango de celdas seleccionado desactivado.",accessibleFirstRow:"Ha llegado a la primera fila.",accessibleLastRow:"Ha llegado a la última fila.",accessibleFirstColumn:"Ha llegado a la primera columna",accessibleLastColumn:"Ha llegado a la última columna.",accessibleSelectionAffordanceTop:"Manejador de selección superior.",accessibleSelectionAffordanceBottom:"Manejador de selección inferior.",accessibleLevelHierarchicalContext:"Nivel {level}",accessibleRowHierarchicalFull:"Fila {posInSet} de {setSize} filas",accessibleRowHierarchicalPartial:"Fila {posInSet} de al menos {setSize} filas",accessibleRowHierarchicalUnknown:"Al menos la fila {posInSet} de al menos {setSize} filas",accessibleColumnHierarchicalFull:"Columna {posInSet} de {setSize} columnas",accessibleColumnHierarchicalPartial:"Columna {posInSet} de al menos {setSize} columnas",accessibleColumnHierarchicalUnknown:"Al menos la columna {posInSet} de al menos {setSize} columnas",msgFetchingData:"Recuperando datos...",msgNoData:"No hay elementos para mostrar.",labelHideColumns:"Ocultar columnas",labelHideRows:"Ocultar filas",labelUnhideColumns:"Mostrar columnas",labelUnhideRows:"Mostrar filas",labelResize:"Cambiar tamaño",labelResizeWidth:"Cambiar ancho",labelResizeHeight:"Cambiar alto",labelSortAsc:"Orden ascendente",labelSortDsc:"Orden descendente",labelSortRow:"Ordenar filas",labelSortRowAsc:"Ordenar filas en forma ascendente",labelSortRowDsc:"Ordenar filas en forma descendente",labelSortCol:"Columna de Ordenación",labelSortColAsc:"Ordenar columnas en forma ascendente",labelSortColDsc:"Ordenar columnas en forma descendente",labelFilter:"Filtrar",labelFilterCol:"Filtrar columna",labelCut:"Cortar",labelPaste:"Pegar",labelCutCells:"Cortar",labelPasteCells:"Pegar",labelCopyCells:"Copiar",labelAutoFill:"Rellenar automáticamente",labelEnableNonContiguous:"Activar selección no contigua",labelDisableNonContiguous:"Desactivar selección no contigua",labelResizeDialogSubmit:"Aceptar",labelResizeDialogCancel:"Cancelar",accessibleContainsControls:"Contiene controles",labelSelectMultiple:"Seleccionar Varios Archivos",labelResizeDialogApply:"Aplicar",labelResizeFitToContent:"Cambiar tamaño para ajustar",columnWidth:"Ancho en píxeles",rowHeight:"Altura en píxeles",labelResizeColumn:"Cambiar Tamaño de Columna",labelResizeRow:"Cambiar tamaño de fila",resizeColumnDialog:"Cambiar tamaño de columna",resizeRowDialog:"Cambiar tamaño de fila",labelFreezeRow:"Congelar filas",labelFreezeCol:"Congelar columnas",labelUnfreezeRow:"Descongelar filas",labelUnfreezeCol:"Descongelar columnas",collapsedText:"Reducir",expandedText:"Ampliar",tooltipRequired:"Necesario"},"oj-ojRowExpander":{accessibleLevelDescription:"Nivel {level}",accessibleRowDescription:"Nivel {level}, Fila {num} de {total}",accessibleRowExpanded:"Fila ampliada",accessibleRowCollapsed:"Fila reducida",accessibleStateExpanded:"ampliado",accessibleStateCollapsed:"reducido"},"oj-ojStreamList":{msgFetchingData:"Recuperando datos..."},"oj-ojListView":{msgFetchingData:"Recuperando datos...",msgNoData:"No hay elementos para mostrar.",msgItemsAppended:"Se han agregado {count} elementos al final.",msgFetchCompleted:"Se han recuperado todos los elementos.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleExpandCollapseInstructionText:"Utilice las teclas de flecha para ampliar y reducir.",accessibleGroupExpand:"Ampliado",accessibleGroupCollapse:"Reducido",accessibleReorderTouchInstructionText:"Pulse dos veces y mantenga pulsado.  Cuando escuche el sonido, arrastre para reorganizar.",accessibleReorderBeforeItem:"Antes de {item}",accessibleReorderAfterItem:"Después de {item}",accessibleReorderInsideItem:"En {item}",accessibleNavigateSkipItems:"Omitiendo {numSkip} artículos",accessibleSuggestion:"Sugerencia",labelCut:"Cortar",labelCopy:"Copiar",labelPaste:"Pegar",labelPasteBefore:"Pegar Delante",labelPasteAfter:"Pegar Detrás"},"oj-ojWaterfallLayout":{msgFetchingData:"Recuperando datos..."},"oj-_ojLabel":{tooltipHelp:"Ayuda",tooltipRequired:"Necesario"},"oj-ojLabel":{tooltipHelp:"Ayuda",tooltipRequired:"Necesario"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Disminuir",tooltipIncrement:"Incrementar"},"oj-ojTable":{accessibleAddRow:"Introduzca datos para agregar una fila nueva.",accessibleColumnContext:"Columna {index}",accessibleColumnFooterContext:"Pie de página de columna {index}",accessibleColumnHeaderContext:"Cabecera de columna {index}",accessibleContainsControls:"Contiene controles",accessibleColumnsSpan:"Abarca {count} columnas",accessibleEditableSummary:"Pulse F2 para enfocar los controles de solo lectura, o Intro para empezar a editar",accessibleRowContext:"Fila {index}",accessibleSortable:"{id} se puede ordenar",accessibleSortAscending:"Valores {id} ordenados en orden ascendente",accessibleSortDescending:"Valores {id} ordenados en orden descendente",accessibleStateSelected:"seleccionado",accessibleStateUnselected:"sin seleccionar",accessibleSummaryEstimate:"Tabla con {colnum} columnas y más de {rownum} filas",accessibleSummaryExact:"Tabla con {colnum} columnas y {rownum} filas",labelAccSelectionAffordanceTop:"Manejador de selección superior",labelAccSelectionAffordanceBottom:"Manejador de selección inferior",labelEnableNonContiguousSelection:"Activar selección no contigua",labelDisableNonContiguousSelection:"Desactivar selección no contigua",labelResize:"Cambiar tamaño",labelResizeColumn:"Cambiar Tamaño de Columna",labelResizePopupSubmit:"Aceptar",labelResizePopupCancel:"Cancelar",labelResizePopupSpinner:"Cambiar Tamaño de Columna",labelResizeColumnDialog:"Cambiar tamaño de columna",labelColumnWidth:"Ancho en píxeles",labelResizeDialogApply:"Aplicar",labelSelectRow:"Seleccionar Fila",labelSelectAllRows:"Seleccionar todas las filas",labelEditRow:"Editar fila",labelSelectAndEditRow:"Seleccionar y editar fila",labelSelectColumn:"Seleccionar Columna",labelSort:"Ordenar",labelSortAsc:"Orden ascendente",labelSortDsc:"Orden descendente",msgFetchingData:"Recuperando datos...",msgNoData:"No hay ningún dato que mostrar.",msgInitializing:"Inicializando...",msgColumnResizeWidthValidation:"El valor de ancho debe ser un entero.",msgScrollPolicyMaxCountSummary:"Se ha excedido el máximo de filas para el desplazamiento por la tabla.",msgScrollPolicyMaxCountDetail:"Vuelva a cargar con un juego de datos más pequeño.",msgStatusSortAscending:"Valores {0} ordenados en orden ascendente.",msgStatusSortDescending:"Valores {0} ordenados en orden descendente.",tooltipRequired:"Necesario"},"oj-ojTabs":{labelCut:"Cortar",labelPasteBefore:"Pegar Delante",labelPasteAfter:"Pegar Detrás",labelRemove:"Eliminar",labelReorder:"Volver a ordenar",removeCueText:"Eliminable"},"oj-ojCheckboxset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Seleccione un valor."}},"oj-ojRadioset":{readonlyNoValue:"",required:{hint:"",messageSummary:"",messageDetail:"Seleccione un valor."}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:"Seleccione un valor."},searchField:"Campo de búsqueda",noMatchesFound:"No se ha encontrado ninguna coincidencia",noMoreResults:"No hay más resultados",oneMatchesFound:"Se ha encontrado una coincidencia",moreMatchesFound:"{num} coincidencias encontradas",filterFurther:"Hay más resultados disponibles, siga filtrando."},"oj-ojSwitch":{SwitchON:"Activado",SwitchOFF:"Desactivado"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"No se ha encontrado ninguna coincidencia",noMoreResults:"No hay más resultados",oneMatchesFound:"Se ha encontrado una coincidencia",moreMatchesFound:"{num} coincidencias encontradas",filterFurther:"Hay más resultados disponibles, siga filtrando."},"oj-ojSelectSingle":{required:{hint:"",messageSummary:"",messageDetail:"Seleccione un valor."},noMatchesFound:"No se ha encontrado ninguna coincidencia",oneMatchFound:"Se ha encontrado una coincidencia",multipleMatchesFound:"{num} coincidencias encontradas",nOrMoreMatchesFound:"Se han encontrado {num} o más coincidencias",cancel:"Cancelar",labelAccOpenDropdown:"ampliar",labelAccClearValue:"borrar valor",noResultsLine1:"No se ha encontrado ningún resultado",noResultsLine2:"No se ha encontrado nada que coincida con su búsqueda."},"oj-ojInputSearch2":{cancel:"Cancelar",noSuggestionsFound:"No se han encontrado sugerencias"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"No se ha encontrado ninguna coincidencia",oneMatchesFound:"Se ha encontrado una coincidencia",moreMatchesFound:"{num} coincidencias encontradas"},"oj-ojTreeView":{treeViewSelectorAria:"Selector de vista de árbol {rowKey}",retrievingDataAria:"Recuperando datos para el nodo: {nodeText}",receivedDataAria:"Datos recibidos para el nodo: {nodeText}"},"oj-ojTree":{stateLoading:"Cargando...",labelNewNode:"Nuevo Nodo",labelMultiSelection:"Selección Múltiple",labelEdit:"Editar",labelCreate:"Crear",labelCut:"Cortar",labelCopy:"Copiar",labelPaste:"Pegar",labelPasteAfter:"Pegar Detrás",labelPasteBefore:"Pegar Delante",labelRemove:"Eliminar",labelRename:"Cambiar nombre",labelNoData:"No hay datos"},"oj-ojPagingControl":{labelAccPaging:"Paginación",labelAccPageNumber:"Contenido de la página {pageNum} cargado",labelAccNavFirstPage:"Primera página",labelAccNavLastPage:"Última Página",labelAccNavNextPage:"Página siguiente",labelAccNavPreviousPage:"Página Anterior",labelAccNavPage:"Página",labelLoadMore:"Mostrar Más...",labelLoadMoreMaxRows:"Se ha alcanzado el límite máximo de {maxRows} filas",labelNavInputPage:"Página",labelNavInputPageMax:"de {pageMax}",fullMsgItemRange:"{pageFrom}-{pageTo} de {pageMax} elementos",fullMsgItemRangeAtLeast:"{pageFrom}-{pageTo} de al menos {pageMax} elementos",fullMsgItemRangeApprox:"{pageFrom}-{pageTo} de aproximadamente {pageMax} elementos",msgItemRangeNoTotal:"Elementos {pageFrom}-{pageTo}",fullMsgItem:"{pageTo} de {pageMax} elementos",fullMsgItemAtLeast:"{pageTo} de al menos {pageMax} elementos",fullMsgItemApprox:"{pageTo} de aproximadamente {pageMax} elementos",msgItemNoTotal:"{pageTo} elementos",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"de",msgItemRangeOfAtLeast:"de al menos",msgItemRangeOfApprox:"de aproximadamente",msgItemRangeItems:"elementos",tipNavInputPage:"Ir a la página",tipNavPageLink:"Ir a la página {pageNum}",tipNavNextPage:"Siguiente",tipNavPreviousPage:"Anterior",tipNavFirstPage:"Primero",tipNavLastPage:"Último",pageInvalid:{summary:"El valor de página introducido no es válido.",detail:"Introduzca un valor mayor que 0."},maxPageLinksInvalid:{summary:"El valor de maxPageLinks no es válido.",detail:"Introduzca un valor mayor que 4."}},"oj-ojMasonryLayout":{labelCut:"Cortar",labelPasteBefore:"Pegar Delante",labelPasteAfter:"Pegar Detrás"},"oj-panel":{labelAccButtonExpand:"Ampliar",labelAccButtonCollapse:"Reducir",labelAccButtonRemove:"Eliminar",labelAccFlipForward:"Hacia delante",labelAccFlipBack:"Hacia atrás",tipDragToReorder:"Arrastre para reordenar",labelAccDragToReorder:"Arrastre para reordenar, menú contextual disponible"},"oj-ojChart":{labelDefaultGroupName:"Grupo {0}",labelSeries:"Serie",labelGroup:"Grupo",labelDate:"Fecha",labelValue:"Valor",labelTargetValue:"Destino",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Porcentaje",labelLow:"Bajo",labelHigh:"Alto",labelOpen:"Abrir",labelClose:"Cerrar",labelVolume:"Volumen",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Mín.",labelMax:"Máx.",labelOther:"Otro",tooltipPan:"Panorámica",tooltipSelect:"Selección de Marquesina",tooltipZoom:"Zoom con Marquesina",componentName:"Gráfico"},"oj-dvtBaseGauge":{componentName:"Indicador"},"oj-ojDiagram":{promotedLink:"Enlace de {0}",promotedLinks:"Enlaces de {0}",promotedLinkAriaDesc:"Indirecto",componentName:"Diagrama"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} días",accessibleDurationHours:"{0} horas",accessibleTaskInfo:"Hora de inicio {0}, hora de finalización {1}, duración {2}",accessibleMilestoneInfo:"Hora {0}",accessibleRowInfo:"Fila {0}",accessibleTaskTypeMilestone:"Hito",accessibleTaskTypeSummary:"Resumen",accessiblePredecessorInfo:"{0} predecesores",accessibleSuccessorInfo:"{0} sucesores",accessibleDependencyInfo:"Tipo de dependencia {0}, conecta {1} a {2}",startStartDependencyAriaDesc:"inicio a inicio",startFinishDependencyAriaDesc:"inicio a fin",finishStartDependencyAriaDesc:"fin a inicio",finishFinishDependencyAriaDesc:"fin a fin",tooltipZoomIn:"Ampliar",tooltipZoomOut:"Reducir",labelLevel:"Nivel",labelRow:"Fila",labelStart:"Inicio",labelEnd:"Fin",labelDate:"Fecha",labelBaselineStart:"Inicio de base",labelBaselineEnd:"Finalización de base",labelBaselineDate:"Fecha base",labelDowntimeStart:"Inicio de tiempo de inactividad",labelDowntimeEnd:"Finalización de tiempo de inactividad",labelOvertimeStart:"Inicio de tiempo extra",labelOvertimeEnd:"Finalización de tiempo extra",labelAttribute:"Atributo",labelLabel:"Etiqueta",labelProgress:"Progreso",labelMoveBy:"Movido por",labelResizeBy:"Cambiar tamaño en",taskMoveInitiated:"La operación de mover la tarea se ha iniciado correctamente",taskResizeEndInitiated:"Se ha iniciado la finalización de la tarea de cambio de tamaño",taskResizeStartInitiated:"Se ha iniciado el comienzo de la tarea de cambio de tamaño",taskMoveSelectionInfo:"{0} otros seleccionados",taskResizeSelectionInfo:"{0} otros seleccionados",taskMoveInitiatedInstruction:"Utilice las teclas de flecha para desplazarse",taskResizeInitiatedInstruction:"Use las teclas de flecha para cambiar el tamaño",taskMoveFinalized:"La operación de mover la tarea ha finalizado",taskResizeFinalized:"Tarea de cambio de tamaño finalizada",taskMoveCancelled:"La operación de mover la tarea se ha cancelado",taskResizeCancelled:"Tarea de cambio de tamaño cancelada",taskResizeStartHandle:"Identificador de inicio de tarea de cambio de tamaño",taskResizeEndHandle:"Identificador de finalización de tarea de cambio de tamaño"},"oj-ojLegend":{componentName:"Leyenda ",tooltipExpand:"Ampliar",tooltipCollapse:"Reducir",labelInvalidData:"Datos no válidos",labelNoData:"No hay datos que mostrar",labelClearSelection:"Borrar Selección",stateSelected:"Seleccionado",stateUnselected:"No seleccionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateIsolated:"Aislado",labelCountWithTotal:"{0} de {1}",accessibleContainsControls:"Contiene controles"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Otro",labelGroup:"Grupo",labelSize:"Tamaño",labelAdditionalData:"Datos Adicionales",componentName:"Cuadro {0}"},"oj-ojPictoChart":{componentName:"Gráfico de imagen"},"oj-ojSparkChart":{componentName:"Gráfico"},"oj-ojSunburst":{labelColor:"Color",labelSize:"Tamaño",tooltipExpand:"Ampliar",tooltipCollapse:"Reducir",componentName:"Sunburst"},"oj-ojTagCloud":{componentName:"Conjunto de Etiquetas",accessibleContainsControls:"Contiene controles",labelCountWithTotal:"{0} de {1}",labelInvalidData:"Datos no válidos",stateCollapsed:"Reducido",stateDrillable:"Explorable",stateExpanded:"Ampliado",stateIsolated:"Aislado",stateHidden:"Oculto",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateVisible:"Visible"},"oj-ojThematicMap":{componentName:"Mapa Temático",areasRegion:"Áreas",linksRegion:"Enlaces",markersRegion:"Marcadores"},"oj-ojTimeAxis":{componentName:"Eje temporal"},"oj-ojTimeline":{componentName:"Cronología",stateMinimized:"Minimizado",stateMaximized:"Maximizado",stateIsolated:"Aislado",stateHidden:"Oculto",stateExpanded:"Ampliado",stateVisible:"Visible",stateDrillable:"Explorable",stateCollapsed:"Reducido",labelCountWithTotal:"{0} de {1}",accessibleItemDesc:"La descripción es {0}.",accessibleItemEnd:"La hora de finalización es {0}.",accessibleItemStart:"La hora de inicio es {0}.",accessibleItemTitle:"El título es {0}.",labelSeries:"Serie",tooltipZoomIn:"Ampliar",tooltipZoomOut:"Reducir",labelStart:"Inicio",labelEnd:"Fin",labelAccNavNextPage:"Página siguiente",labelAccNavPreviousPage:"Página Anterior",tipArrowNextPage:"Siguiente",tipArrowPreviousPage:"Anterior",navArrowDisabledState:"Desactivada",labelDate:"Fecha",labelTitle:"Título",labelDescription:"Descripción",labelMoveBy:"Movido por",labelResizeBy:"Cambiar tamaño en",itemMoveInitiated:"Se ha iniciado el movimiento del evento",itemResizeEndInitiated:"Se ha iniciado la finalización de cambio de tamaño del evento",itemResizeStartInitiated:"Se ha iniciado el inicio de cambio de tamaño del evento",itemMoveSelectionInfo:"{0} otros seleccionados",itemResizeSelectionInfo:"{0} otros seleccionados",itemMoveInitiatedInstruction:"Utilice las teclas de flecha para desplazarse",itemResizeInitiatedInstruction:"Use las teclas de flecha para cambiar el tamaño",itemMoveFinalized:"Se ha finalizado el movimiento del evento",itemResizeFinalized:"Se ha finalizado el cambio de tamaño del evento",itemMoveCancelled:"Se ha cancelado el movimiento del evento",itemResizeCancelled:"Se ha cancelado el cambio de tamaño del evento",itemResizeStartHandle:"Identificador de inicio de cambio de tamaño de evento",itemResizeEndHandle:"Identificador de finalización de cambio de tamaño de evento"},"oj-ojTreemap":{labelColor:"Color",labelSize:"Tamaño",tooltipIsolate:"Aislar",tooltipRestore:"Restaurar",componentName:"Gráfico de rectángulos"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Datos no válidos",labelNoData:"No hay datos que mostrar",labelClearSelection:"Borrar Selección",labelDataVisualization:"Visualización de Datos",stateSelected:"Seleccionado",stateUnselected:"No seleccionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateExpanded:"Ampliado",stateCollapsed:"Reducido",stateIsolated:"Aislado",stateHidden:"Oculto",stateVisible:"Visible",stateDrillable:"Explorable",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} de {1}",accessibleContainsControls:"Contiene controles"},"oj-ojRatingGauge":{labelClearSelection:"Borrar Selección",stateSelected:"Seleccionado",stateUnselected:"No seleccionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateExpanded:"Ampliado",stateCollapsed:"Reducido",stateIsolated:"Aislado",stateHidden:"Oculto",stateVisible:"Visible",stateDrillable:"Explorable",labelCountWithTotal:"{0} de {1}",accessibleContainsControls:"Contiene controles"},"oj-ojStatusMeterGauge":{labelClearSelection:"Borrar Selección",stateSelected:"Seleccionado",stateUnselected:"No seleccionado",stateMaximized:"Maximizado",stateMinimized:"Minimizado",stateExpanded:"Ampliado",stateCollapsed:"Reducido",stateIsolated:"Aislado",stateHidden:"Oculto",stateVisible:"Visible",stateDrillable:"Explorable",labelCountWithTotal:"{0} de {1}",accessibleContainsControls:"Contiene controles"},"oj-ojNavigationList":{defaultRootLabel:"Lista de Navegación",hierMenuBtnLabel:"Botón de menú jerárquico",selectedLabel:"seleccionado",previousIcon:"Anterior",msgFetchingData:"Recuperando datos...",msgNoData:"No hay elementos para mostrar.",overflowItemLabel:"Más",accessibleReorderTouchInstructionText:"Pulse dos veces y mantenga pulsado.  Cuando escuche el sonido, arrastre para reorganizar.",accessibleReorderBeforeItem:"Antes de {item}",accessibleReorderAfterItem:"Después de {item}",labelCut:"Cortar",labelPasteBefore:"Pegar Delante",labelPasteAfter:"Pegar Detrás",labelRemove:"Eliminar",removeCueText:"Eliminable",accessibleExpandCollapseInstructionText:"Utilice las teclas de flecha para ampliar y reducir."},"oj-ojSlider":{noValue:"ojSlider no tiene ningún valor",maxMin:"El máximo no puede ser menor o igual que el mínimo",startEnd:"value.start no debe ser mayor que value.end",valueRange:"El valor debe estar en el rango de mínimo a máximo",optionNum:"la opción {option} no es un número",invalidStep:"Paso no válido; el paso debe ser > 0",lowerValueThumb:"botón de valor mínimo",higherValueThumb:"botón de valor máximo"},"oj-ojDialog":{labelCloseIcon:"Cerrar"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Ventana emergente de entrada. Pulse F6 para cambiar entre la ventana emergente y el control asociado.",ariaLiveRegionInitialFocusNone:"Ventana emergente abierta. Pulse F6 para cambiar entre la ventana emergente y el control asociado.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Ventana emergente. Para cerrarla, vaya al último enlace de la ventana emergente.",ariaLiveRegionInitialFocusNoneTouch:"Ventana emergente abierta. Vaya al siguiente enlace para centrarse en la ventana emergente.",ariaFocusSkipLink:"Toque dos veces para ir a la ventana emergente abierta.",ariaCloseSkipLink:"Toque dos veces para cerrar la ventana emergente abierta."},"oj-ojRefresher":{ariaRefreshLink:"Activar enlace para refrescar contenido",ariaRefreshingLink:"Refrescando contenido",ariaRefreshCompleteLink:"Refrescamiento realizado"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"Mostrar acciones de inicio",ariaShowEndActionsDescription:"Mostrar acciones de finalización",ariaHideActionsDescription:"Ocultar acciones"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"Ninguna cabecera de grupo que coincida",ariaOthersLabel:"número",ariaInBetweenText:"Entre {first} y {second}",ariaKeyboardInstructionText:"Entre para seleccionar valor.",ariaTouchInstructionText:"Toque dos veces y mantenga pulsado para cambiar a modo de gestos y, a continuación, arrastre hacia arriba o hacia abajo para ajustar el valor."},"oj-ojMenu":{labelCancel:"Cancelar",ariaFocusSkipLink:"Se ha enfocado el menú. Toque dos veces o deslice para enfocar el primer elemento del menú."},"oj-ojColorSpectrum":{labelHue:"Matiz",labelOpacity:"Opacidad",labelSatLum:"Saturación/Luminosidad",labelThumbDesc:"Control deslizante de cuatro direcciones para espectro de color."},"oj-ojColorPalette":{labelNone:"Ninguno"},"oj-ojColorPicker":{labelSwatches:"Muestras",labelCustomColors:"Colores Personalizados",labelPrevColor:"Color anterior",labelDefColor:"Color por defecto",labelDelete:"Suprimir",labelDeleteQ:"¿Suprimir?",labelAdd:"Agregar",labelAddColor:"Agregar color",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"Matiz",labelSliderSaturation:"Saturación",labelSliderSat:"Sat",labelSliderLightness:"Iluminación",labelSliderLum:"Luminosidad",labelSliderAlpha:"Alfa",labelOpacity:"Opacidad",labelSliderRed:"Rojo",labelSliderGreen:"Verde",labelSliderBlue:"Azul"},"oj-ojFilePicker":{dropzoneText:"Suelte los archivos aquí o haga clic para cargarlos",singleFileUploadError:"Cargue los archivos de uno en uno.",singleFileTypeUploadError:"No puede cargar archivos del tipo {fileType}.",multipleFileTypeUploadError:"No puede cargar archivos del tipo: {fileTypes}.",dropzonePrimaryText:"Arrastrar y Soltar",secondaryDropzoneText:"Seleccione un archivo o suelte uno aquí.",secondaryDropzoneTextMultiple:"Seleccione o suelte archivos aquí.",unknownFileType:"desconocido"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"En curso"},"oj-ojMessage":{labelCloseIcon:"Cerrar",categories:{error:"Error",warning:"Advertencia",info:"Información",confirmation:"Confirmación",none:"Ninguno"}},"oj-ojMessages":{labelLandmark:"Mensajes",ariaLiveRegion:{navigationFromKeyboard:"Zona de entrada de mensajes. Pulse F6 para volver al elemento enfocado anterior.",navigationToTouch:"La zona de mensajes tiene mensajes nuevos. Utilice el rotor de voz para navegar hasta la marca del mensaje.",navigationToKeyboard:"La zona de mensajes tiene mensajes nuevos. Pulse F6 para navegar a la zona de mensajes más reciente.",newMessage:"Categoría de mensaje {category}. {summary}. {detail}.",noDetail:"No hay detalles disponibles"}},"oj-ojMessageBanner":{close:"Cerrar",navigationFromMessagesRegion:"Zona de entrada de mensajes. Pulse F6 para volver al elemento enfocado anterior.",navigationToMessagesRegion:"La zona de mensajes tiene mensajes nuevos. Pulse F6 para navegar a la zona de mensajes más reciente.",error:"Error",warning:"Advertencia",info:"Información",confirmation:"Confirmación"},"oj-ojConveyorBelt":{tipArrowNext:"Siguiente",tipArrowPrevious:"Anterior"},"oj-ojTrain":{stepInfo:"Paso {index} de {count}.",stepStatus:"Estado: {status}.",stepCurrent:"Actual",stepVisited:"Visitado",stepNotVisited:"No visitado",stepDisabled:"Desactivado",stepMessageType:"Tipo de mensaje: {messageType}.",stepMessageConfirmation:"Confirmado",stepMessageInfo:"Información",stepMessageWarning:"Advertencia",stepMessageError:"Error"}});