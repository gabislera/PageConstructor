import React, { useState } from 'react';
import { Box, Chip, Grid, Typography, IconButton } from '@mui/material';
import { Add } from '@mui/icons-material';

export default function ClassEditor() {
  const [className, setClassName] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [classList, setClassList] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClass = (e) => {
    if (e.key === 'Enter' && className) {
      if (editIndex !== -1) {
        const newClassList = [...classList];
        newClassList[editIndex] = className;
        setClassList(newClassList);
        setEditIndex(-1);
      } else {
        setClassList([...classList, className]);
      }
      setClassName('');
      setIsAdding(false);
    }
  };

  const handleDeleteClass = (index) => {
    setClassList(classList.filter((_, i) => i !== index));
  };

  const handleStartAdding = () => {
    setIsAdding(true);
  };

  const handleEditClass = (index) => {
    const classItem = classList[index];
    setClassName(classItem);
    setEditIndex(index);
    setIsAdding(true);
  };

  // Função para converter classes CSS em objeto de estilo
  const getStyleFromClasses = () => {
    return classList.reduce((styleObject, currentClass) => {
      const [property, value] = currentClass.split(':');
      if (property && value) {
        styleObject[property.trim()] = value.trim();
      }
      return styleObject;
    }, {});
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={2} mt={10} px={2}>
      <Box mt={2} sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        {classList.map((classItem, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', mr: 1, mb: 1 }}>
            <Chip
              size='small'
              label={classItem}
              onDelete={() => handleDeleteClass(index)}
              onClick={() => handleEditClass(index)}
              sx={{ backgroundColor: '#9165b9', color: '#fff', borderRadius: 0.5 }}
            />
          </Box>
        ))}
        {isAdding ? (
          <input autoFocus type="text" value={className} onChange={(e) => setClassName(e.target.value)} onKeyDown={handleAddClass}
            style={{ marginTop: '20px', padding: '10px', outline: 'none', background: 'transparent', border: 'none' }}
          />
        ) : (
          <IconButton size="small" color="primary" onClick={handleStartAdding}>
            <Add />
          </IconButton>
        )}
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">Classes: {classList.join(' ')}</Typography>
      </Box>
      <Box mt={2} sx={{ border: '1px solid #ccc', width: '100%', textAlign: 'center' }}>
        <Typography variant="h6">Elemento de Teste</Typography>
        <Box mt={2} sx={{ padding: 2, ...getStyleFromClasses() }}>
          Este é o elemento de teste.
        </Box>
      </Box>
    </Grid>
  );
}




// import React, { useState } from 'react';
// import { Box, Chip, Grid, Typography, IconButton } from '@mui/material';
// import { Add } from '@mui/icons-material';


// export default function ClassEditor() {
//   const [className, setClassName] = useState('');
//   const [editIndex, setEditIndex] = useState(-1);
//   const [classList, setClassList] = useState([]);
//   const [isAdding, setIsAdding] = useState(false);


//   const handleAddClass = (e) => {
//     if (e.key === 'Enter' && className) {
//       if (editIndex !== -1) {
//         const newClassList = [...classList];
//         newClassList[editIndex] = className;
//         setClassList(newClassList);
//         setEditIndex(-1);
//       } else {
//         setClassList([...classList, className]);
//       }
//       setClassName('');
//       setIsAdding(false);
//     }
//   };

//   const handleDeleteClass = (index) => {
//     setClassList(classList.filter((_, i) => i !== index));
//   };


//   const handleStartAdding = () => {
//     setIsAdding(true);
//   };

//   const handleEditClass = (index) => {
//     const classItem = classList[index];
//     setClassName(classItem);
//     setEditIndex(index);
//     setIsAdding(true);
//   };

//   return (
//     <Grid container direction="column" alignItems="center" spacing={2} mt={10} px={2}>
//       <Box mt={2} sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
//         {classList.map((classItem, index) => (
//           <Box key={index} sx={{ display: 'flex', alignItems: 'center', mr: 1, mb: 1 }}>
//             <Chip
//               size='small'
//               label={classItem}
//               onDelete={() => handleDeleteClass(index)}
//               onClick={() => handleEditClass(index)}
//               sx={{ backgroundColor: '#9165b9', color: '#fff', borderRadius: 0.5 }}
//             />
//           </Box>
//         ))}
//         {isAdding ? (
//           <input autoFocus type="text" value={className} onChange={(e) => setClassName(e.target.value)} onKeyDown={handleAddClass}
//             style={{ marginTop: '20px', padding: '10px', outline: 'none', background: 'transparent', border: 'none' }}
//           />
//         ) : (
//           <IconButton size="small" color="primary" onClick={handleStartAdding}>
//             <Add />
//           </IconButton>
//         )}
//       </Box>
//       <Box mt={2}>
//         <Typography variant="subtitle1">Classes: {classList.join(' ')}</Typography>
//       </Box>
//     </Grid>
//   );
// }

