import os
import subprocess
import sys

def create_virtualenv(env_name):
    """Crea el entorno virtual si no existe."""
    if not os.path.exists(env_name):
        print(f"Creando entorno virtual en la carpeta: {env_name}")
        subprocess.check_call([sys.executable, "-m", "venv", env_name])
        print(f"Entorno virtual '{env_name}' creado con éxito.")
    else:
        print(f"El entorno virtual '{env_name}' ya existe.")

def install_requirements(env_name, requirements_file):
    """Instala los requisitos del archivo requirements.txt."""
    pip = os.path.join(env_name, 'bin', 'pip') if os.name != 'nt' else os.path.join(env_name, 'Scripts', 'pip.exe')
    command = [pip, "install", "-r", requirements_file]
    try:
        print(f"Instalando requisitos desde {requirements_file}...")
        subprocess.check_call(command)
        print("Requisitos instalados correctamente.")
    except subprocess.CalledProcessError as e:
        print(f"Error al instalar los requisitos: {e}")
        sys.exit(1)

def run_backend(env_name, app_file):
    """Ejecuta el archivo app.py del backend."""
    python = os.path.join(env_name, 'bin', 'python') if os.name != 'nt' else os.path.join(env_name, 'Scripts', 'python.exe')
    try:
        print(f"Ejecutando el backend con el archivo {app_file}...")
        subprocess.check_call([python, app_file])
        print("Aplicación backend ejecutada con éxito.")
    except subprocess.CalledProcessError as e:
        print(f"Error al ejecutar el backend: {e}")
        sys.exit(1)

def main():
    env_name = "venv"  # Nombre del entorno virtual
    requirements_file = "backend/requirements.txt"  # Ruta al archivo requirements.txt
    app_file = "backend/app.py"  # Ruta al archivo principal de tu backend

    # Paso 1: Crear el entorno virtual
    create_virtualenv(env_name)

    # Paso 2: Instalar los requisitos
    install_requirements(env_name, requirements_file)

    # Paso 3: Ejecutar el backend
    run_backend(env_name, app_file)

if __name__ == "__main__":
    main()
