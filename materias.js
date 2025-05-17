const materiasPorSemestre = {
    1: ['Matemáticas básicas', 'Lógica matemática', 'Introducción a la programación', 'Introducción a la ingeniería de sistemas', 'Introducción a la ingeniería de sistemas', 'Lecto - escritura'],
    2: ['Cálculo diferencial', 'Física y laboratorio I', 'Matemáticas discretas', 'Programación de computadores', 'Electiva socio - humanística', 'Inglés I'],
    3: ['Cálculo integral', 'Álgebra lineal', 'Física y laboratorio II', 'Programación en entornos gráficos', 'Electiva recreativa', 'Inglés II'],
    4: ['Cálculo de varias variables', 'Física y laboratorio III', 'Análisis numérico', 'Estructuras de información', 'Teoría de base de datos', 'Ingeniería de software', 'Inglés III'],
    5: ['Ecuaciones diferenciales', 'Probabilidad y estadística', 'Programación avanzada', 'Base de datos I', 'Ingeniería de requisitos', 'Inglés IV'],
    6: ['Pendiente por cursar'],
    7: ['Pendiente por cursar'],
    8: ['Pendiente por cursar'],
    9: ['Pendiente por cursar'],
    10: ['Pendiente por cursar']
  };
  
  function mostrarMaterias() {
    const select = document.getElementById('semestre');
    const value = select.value;
    const materiasDiv = document.getElementById('materias');
  
    materiasDiv.innerHTML = '';
    if (materiasPorSemestre[value]) {
      const ul = document.createElement('ul');
      materiasPorSemestre[value].forEach(materia => {
        const li = document.createElement('li');
        li.textContent = materia;
        ul.appendChild(li);
      });
      materiasDiv.appendChild(ul);
    }
  }
  