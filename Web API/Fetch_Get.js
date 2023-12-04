// Définir l'URL à partir de laquelle vous souhaitez récupérer les données JSON
const url = 'https://exemple.com/api/data';

// Utiliser la fonction fetch pour faire la requête HTTP
fetch(url)
  .then(response => {
    // Vérifier si la réponse du serveur est OK (statut 200)
    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut: ${response.status}`);
    }
    // Si la réponse est OK, retourner la réponse au format JSON
    return response.json();
  })
  .then(data => {
    // Traiter les données JSON
    console.log('Données récupérées avec succès:', data);

    // Vous pouvez effectuer d'autres opérations avec les données ici
  })
  .catch(error => {
    // Gérer les erreurs, par exemple en affichant un message d'erreur
    console.error('Erreur lors de la récupération des données:', error.message);
  });